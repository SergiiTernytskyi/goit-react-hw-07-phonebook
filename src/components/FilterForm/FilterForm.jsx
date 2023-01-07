import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const inputHandler = event => {
    const form = event.target;
    console.log(form.value);
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
      />
    </div>
  );
};
