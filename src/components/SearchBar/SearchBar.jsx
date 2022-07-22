import { useState } from 'react';
import PropTypes from 'prop-types';
// import s from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = event => {
    setSearch(event.currentTarget.value);
  };

  const onSubmintForm = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={onSubmintForm}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        name="search"
        value={search}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChangeInput}
      />
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
