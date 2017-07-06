import React from 'react';

function TodoItem(props) {
  return <div className={props.className}>{props.name}</div>;
}

TodoItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

TodoItem.displayName = 'TodoItem';

export default TodoItem;
