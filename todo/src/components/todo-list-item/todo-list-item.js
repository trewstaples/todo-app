import React, { useState } from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onDelete }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);

  return (
    <span className={`todo-list-item ${done && 'done'} ${important && 'important'}`}>
      <span className="todo-list-item-label" onClick={() => setDone(!done)}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={() => setImportant(!important)}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDelete}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
