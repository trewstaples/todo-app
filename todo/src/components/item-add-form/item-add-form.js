import React, { useState } from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {
  const [formValue, setFormValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(formValue);
    setFormValue('');
  };

  const onLabelChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control new-todo-label"
        value={formValue}
        onChange={onLabelChange}
        placeholder="What needs to be done?"
      />

      <button type="submit" className="btn btn-outline-secondary">
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
