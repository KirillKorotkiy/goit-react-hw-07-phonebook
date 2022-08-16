import React from 'react';
import { FilterLebel, FileterInput, Title } from './Filter.styled';
import { useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const findFilter = event => {
    const form = event.currentTarget;
    dispatch(setFilter(form.value));
  };

  return (
    <FilterLebel>
      <Title>Find contac by name</Title>
      <FileterInput type="text" name="search" onChange={findFilter} />
    </FilterLebel>
  );
};

export default Filter;
