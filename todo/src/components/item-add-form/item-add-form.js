import React from 'react';

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <div className="item-add-form">
      <button className="btn btn-outline-secondary" onClick={() => onItemAdded('Hello World')}>
        Add Item
      </button>
    </div>
  );
};

export default ItemAddForm;