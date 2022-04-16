import React, { useState } from 'react';

import './app.css';

import { createTodoItem, todoItems } from '../../utils';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

const App = () => {
  const [todoData, setTodoData] = useState(todoItems);
  const [term, setTerm] = useState('');

  const onDelete = (id) => {
    const index = todoData.findIndex((item) => item.id === id);
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  };

  const onItemAdded = (text) => {
    const newItem = createTodoItem(text);

    setTodoData([...todoData, newItem]);
  };

  const toggleProperty = (arr, id, propName) => {
    const index = arr.findIndex((item) => item.id === id);

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  const onToggleImportant = (id) => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  };

  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  };

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const onSearchChange = (term) => {
    setTerm(term);
  };

  const onFilterChange = (activeFilter) => {
    console.log(activeFilter);
    switch (activeFilter) {
      case 'Active':
        setTodoData(todoData.filter((item) => !item.done));
        break;
      case 'Done':
        setTodoData(todoData.filter((item) => item.done));
        break;
      default:
        setTodoData(todoItems);
    }
  };

  const doneCount = todoData.filter((item) => item.done).length;
  const todoCount = todoData.length - doneCount;
  const visibleItems = search(todoData, term);

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter onFilterChange={onFilterChange} />
      </div>

      <TodoList
        todos={visibleItems}
        onDelete={onDelete}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm onItemAdded={onItemAdded} />
    </div>
  );
};

export default App;

//Настроить поиск по приложению
//Настроить фильтр
