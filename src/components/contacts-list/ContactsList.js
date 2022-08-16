import React from 'react';
import {
  ContactListLi,
  ContactTitle,
  Button,
  Name,
} from './ContactsList.styled';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsAPI';
import Filter from 'components/filter/Filter';
import { useState } from 'react';
import { useMemo } from 'react';

const ContactsList = () => {
  const { data = [] } = useGetAllContactsQuery();
  const contacts = data;
  const [deleteContact] = useDeleteContactMutation();
  const [filter, setFilter] = useState('');

  const handeleDelete = async id => {
    await deleteContact(id).unwrap();
  };

  const filterByName = useMemo(() => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
  }, [filter, contacts]);

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
