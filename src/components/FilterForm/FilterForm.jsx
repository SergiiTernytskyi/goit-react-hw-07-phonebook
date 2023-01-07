import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const inputHandler = event => {
    const form = event.target;
    dispatch(filterContacts(form.value));
  };

  const filterId = nanoid();

  return (
    <div>
      <label htmlFor={filterId}>Search contacts by name</label>
      <input
        id={filterId}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={inputHandler}
        value={filter}
      />
    </div>
  );
};
