import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <TodoListItem label={'Drink Coffee'} />
      <TodoListItem label={'Create React App'} important />
    </ul>
  );
};

export default TodoList;
