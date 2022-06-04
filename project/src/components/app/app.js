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
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filter = (items, filter) => {
    switch (filter) {
      case 'All':
        return items;
      case 'Active':
        return items.filter((item) => !item.done);
      case 'Done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const onFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const doneCount = todoData.filter((item) => item.done).length;
  const todoCount = todoData.length - doneCount;
  const visibleItems = filter(search(todoData, term), activeFilter);

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter activeFilter={activeFilter} onFilterChange={onFilterChange} />
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
