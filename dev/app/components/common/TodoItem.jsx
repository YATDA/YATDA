import PropTypes from 'prop-types';
import React from 'react';


function TodoItem(props) {
  function handleClick(event){
    console.log(props.name);
  }
  return (
    <div className={props.className} onClick={handleClick}>
      {props.name}
    </div>
  );
}



TodoItem.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TodoItem.displayName = 'TodoItem';

export default TodoItem;
