import React from 'react';

import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import css from './ContactList.module.css';

import { ContactListElement } from 'components/ContactListElement/ContactListElement';

const getFilteredContacts = (contacts, filter) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  const renderContactList = ({ id, name, number }) => {
    return <ContactListElement key={id} id={id} name={name} number={number} />;
  };

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(renderContactList)}
    </ul>
  );
};
