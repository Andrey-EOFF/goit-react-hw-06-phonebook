import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';
import { updateFilter } from '../../redux/reducers';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(updateFilter(value));
  };

  return (
    <FilterContainer htmlFor="">
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
