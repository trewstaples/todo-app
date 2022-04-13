import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  };
  return <li style={style}>{label}</li>;
};

export default TodoListItem;
