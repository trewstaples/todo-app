import React, { useState } from 'react';

import './app.css';

import { uniqueId } from '../../utils';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

const App = () => {
  const createTodoItem = (label) => {
    return { label: label, important: false, done: false, id: uniqueId() };
  };

  const items = [
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a Lunch'),
  ];

  const [todoData, setTodoData] = useState(items);

  const onDelete = (id) => {
    const index = todoData.findIndex((item) => item.id === id);
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  };

  const onItemAdded = (text) => {
    const newItem = createTodoItem(text);

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
