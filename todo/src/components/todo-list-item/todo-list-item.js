import React, { useState } from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);

  const onLabelClick = () => {
    setDone(!done);
  };

  const onMarkImportant = () => {
    setImportant(!important);
  };

  return (
    <span className={`todo-list-item ${done && 'done'} ${important && 'important'}`}>
      <span className="todo-list-item-label" onClick={onLabelClick}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onMarkImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
