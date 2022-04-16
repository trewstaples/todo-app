import React, { useState } from 'react';

const filterItems = ['All', 'Active', 'Done'];

const ItemStatusFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const onFilterClick = (e) => {
    setActiveFilter(e.target.outerText);
    onFilterChange(e.target.outerText);
  };

  return (
    <div className="btn-group">
      {filterItems.map((item) => {
        return (
          <button
            type="button"
            key={item}
            className={`btn ${activeFilter === item ? 'btn-info' : 'btn-outline-secondary'}`}
            onClick={onFilterClick}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ItemStatusFilter;

//Настроить фильтр

//Отфильтровать исходный массив задач по фильтрам

//All - исходный массив
//Active - done:false
//Done: - done:true
