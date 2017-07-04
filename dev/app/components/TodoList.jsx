import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList(props) {
  const todoItems = props.todos.map(function(todo) {
    return <TodoItem name={todo} key={todo} />;
  });

  return <div className={props.className}>{todoItems}</div>;
}
className.propTypes = {
  function: PropTypes.func.isRequired
};
TodoList.displayName = 'TodoList';

export default TodoList;
