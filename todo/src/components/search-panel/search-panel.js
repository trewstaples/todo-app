import React, { useState } from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearchChange }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    const term = e.target.value;
    setTerm(term);
    onSearchChange(term);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={term}
      onChange={onInputChange}
    />
  );
};

export default SearchPanel;
