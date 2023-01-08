import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import {
  ContactName,
  ContactPhone,
  IconButton,
  Wrapper,
} from './ContactsItem.styled';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Wrapper>
      <ContactName>{name}:</ContactName>
      <ContactPhone>{phone}</ContactPhone>
      <IconButton type="button" aria-label="delete" onClick={deleteHandler}>
        <FaRegTrashAlt size={25} />
      </IconButton>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
