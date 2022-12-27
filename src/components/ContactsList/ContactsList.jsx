import PropTypes from 'prop-types';
import {
  ContactList,
  ContactItem,
  ContactName,
  ContactButton,
  ContactNumber,
} from './ContactsList.styled';

export default function ListForm({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactName>
            {name}: <ContactNumber>{number}</ContactNumber>
          </ContactName>
          <ContactButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}

ListForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
