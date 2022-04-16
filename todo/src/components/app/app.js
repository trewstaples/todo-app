import React, { useState } from 'react';

import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

const MAX_ID = 100;

const App = () => {
  const [maxId, setMaxId] = useState(MAX_ID);

  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: ' Make Awesome App', important: true, id: 2 },
    { label: 'Have a Lunch', important: false, id: 3 },
  ]);

  const onDelete = (id) => {
    const index = todoData.findIndex((item) => item.id === id);
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  };

  const onItemAdded = (text) => {
    setMaxId(maxId + 1);
    const newItem = { label: text, important: false, id: maxId };

    setTodoData([...todoData, newItem]);
  };

  const onToggleImportant = (id) => {
    console.log(`Toggle important ${id}`);
  };

  const onToggleDone = (id) => {
    console.log(`Toggle done ${id}`);
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList
        todos={todoData}
        onDelete={onDelete}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm onItemAdded={onItemAdded} />
    </div>
  );
};

export default App;
