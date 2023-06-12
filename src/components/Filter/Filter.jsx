import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { updateFilter, selectFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value));
  };

  return (
    <FilterContainer htmlFor="">
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={handleChange} />
    </FilterContainer>
  );
};

export default Filter;
