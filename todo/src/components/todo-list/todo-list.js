import React from 'react';

import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ todos, onDelete }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
