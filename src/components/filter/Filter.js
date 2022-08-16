import React from 'react';
import { FilterLebel, FileterInput, Title } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLebel>
      <Title>Find contac by name</Title>
      <FileterInput
        type="text"
        name="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FilterLebel>
  );
};

export default Filter;
