import React, { useState } from 'react';

import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

const App = () => {
  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', importang: false, id: 1 },
    { label: ' Make Awesome App', important: true, id: 2 },
    { label: 'Have a Lunch', important: false, id: 3 },
  ]);

  const onDelete = (id) => {
    const index = todoData.findIndex((item) => item.id === id);
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDelete={onDelete} />
    </div>
  );
};

export default App;
