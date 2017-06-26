import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const todoItems = props.todos.map(function(todo) {
    return <TodoItem name={todo} key={todo} />;
  });

  return <div className={props.className}>{todoItems}</div>;
}

TodoList.displayName = 'TodoList';

export default TodoList;
