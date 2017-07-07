import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList(props) {
  const todoItems = props.todos.map(function(todo) {
    return <TodoItem name={todo} key={todo} />;
  });

  return <div className={props.className}>{todoItems}</div>;
}
TodoList.propTypes = {
  todos: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};
TodoList.displayName = 'TodoList';

export default TodoList;
