import React from 'react';

function TodoItem(props) {
  return <div className={props.className}>{props.name}</div>;
}

TodoItem.displayName = 'TodoItem';

export default TodoItem;
