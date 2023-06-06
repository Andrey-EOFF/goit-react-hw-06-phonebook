import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveContact, deleteContact, updateFilter } from 'redux/contactsSlice';
import { Title, SubTitle, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const { name } = newContact;
    const isNameAlreadyExist = contacts.some(
      contact => contact.name === newContact
    );

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(saveContact(newContact));
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={handleFilterChange} />
      <SubTitle>Contacts</SubTitle>
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContactById}
      />
    </Container>
  );
};

export default App;
