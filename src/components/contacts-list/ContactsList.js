import React from 'react';
import {
  ContactListLi,
  ContactTitle,
  Button,
  Name,
} from './ContactsList.styled';
import { useDeleteContactMutation } from 'redux/contactsAPI';
import Filter from 'components/filter/Filter';
import { useFilter } from 'components/hook/useFilter';

const ContactsList = () => {
  const [deleteContact] = useDeleteContactMutation();
  const { filterByName, filter, setFilter } = useFilter();

  const handeleDelete = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <ul>
      <Filter value={filter} onChange={setFilter} />
      <ContactTitle>Contacts</ContactTitle>
      {filterByName.map(({ id, name, phone }) => (
        <ContactListLi key={id}>
          <Name>
            {name}: {phone}
          </Name>
          <Button type="button" onClick={() => handeleDelete(id)}></Button>
        </ContactListLi>
      ))}
    </ul>
  );
};

export default ContactsList;
