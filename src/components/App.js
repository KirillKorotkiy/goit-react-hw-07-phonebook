import React from 'react';
import { Container, ContainerTitle } from 'components/App.styled';
import ContactsForm from './form/ContactsForm';
import ContactsList from './contacts-list/ContactsList';

const App = () => {
  return (
    <Container>
      <ContainerTitle>Phonebook</ContainerTitle>
      <ContactsForm />
      <ContactsList />
    </Container>
  );
};

export default App;
