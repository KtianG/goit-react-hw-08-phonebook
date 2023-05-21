import React from 'react';
import { useDispatch } from 'react-redux';
import { setQueryFilter } from 'redux/contacts/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setQueryFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <p className={css.title}>Find Contacts by name:</p>
      <input
        className={css.inputBar}
        type="text"
        name="filter"
        onChange={e => handleInput(e)}
      />
    </div>
  );
};
