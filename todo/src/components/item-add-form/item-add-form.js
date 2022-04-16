import React, { useState } from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {
  const [formValue, setFormValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(formValue);
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control new-todo-label"
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="What needs to be done?"
      />

      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
};

export default ItemAddForm;
