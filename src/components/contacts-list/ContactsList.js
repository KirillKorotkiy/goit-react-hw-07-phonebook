import React from 'react';
import { ContactListLi, ContactTitle } from './ContactsList.styled';
import { useSelector } from 'react-redux/es/exports';
import { useGetAllContactsQuery, useDeleteContactMutation } from 'redux/contactsAPI'; 

const ContactsList = () => {
  const { data =[] } = useGetAllContactsQuery();
  const contacts = data
  const [ deleteContact] = useDeleteContactMutation()

  const filter = useSelector(state => state.contacts.filter)

const handeleDelete = async (id) => {
  await deleteContact(id).unwrap()
}

 const filterByName = () => {
    const normalaizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
    return filtredContacts;
  }
  return (
    <ul>
      <ContactTitle>Contacts</ContactTitle>
      {filterByName().map(({ id, name, phone }) => (
        <ContactListLi key={id}>
          <span>
            {name}: {phone}
          </span>
          <button type="button" onClick={() => handeleDelete(id)}>
            Delete
          </button>
        </ContactListLi>
      ))}
    </ul>
  );
};

export default ContactsList;
