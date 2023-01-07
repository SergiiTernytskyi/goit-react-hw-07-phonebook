import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <span>{name}:</span>
      <span>{phone}</span>
      <button type="button" aria-label="delete" onClick={deleteHandler}>
        <FaRegTrashAlt size={25} />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
