import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return <h1>Todo App</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React App</li>
      <li>Drink Coffee</li>
    </ul>
  );
};

const el = (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
