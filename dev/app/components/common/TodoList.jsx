import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const todoItems = props.todos.map(function(todo) {
    return <TodoItem className="yatda-list-item" name={todo} key={todo} />;
  });

  return (
    <div className={props.className}>
      {todoItems}
    </div>
  );
}
TodoList.propTypes = {
  className: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};
TodoList.displayName = 'TodoList';

export default TodoList;
