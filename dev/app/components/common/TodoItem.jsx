import PropTypes from 'prop-types';
import React from 'react';


function TodoItem(props) {
  function handleClick(event){
    event.preventDefault();
    console.log(props.name);
  }
  return (
    <div className={props.className}>
      <a href= {props.name} onClick={handleClick}>
        {props.name}
      </a>
    </div>
  );
}



TodoItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TodoItem.displayName = 'TodoItem';

export default TodoItem;
