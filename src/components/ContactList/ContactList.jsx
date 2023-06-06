import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';
import { deleteContact } from '../../redux/reducers';

const ContactList = ({ onDeleteContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    onDeleteContact(contactId);
  };

  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => (
        <StyledContactItem key={id}>
          <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;