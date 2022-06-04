import React from 'react';

const filterItems = ['All', 'Active', 'Done'];

const ItemStatusFilter = ({ activeFilter, onFilterChange }) => {
  const onFilterClick = (e) => {
    onFilterChange(e.target.outerText);
  };

  return (
    <div className="btn-group">
      {filterItems.map((item) => {
        const isFilterActive = activeFilter === item;
        const filterStatus = isFilterActive ? 'btn-info' : 'btn-outline-secondary';
        return (
          <button
            type="button"
            key={item}
            className={`btn ${filterStatus}`}
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
