import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from '../containers/App/styles.css';

// stateless component
const ToDoItem = ({ todo, toggleComplete, removeToDo }) => {
  console.log(todo);
  return (
    <li>
      {todo.title}
      <input
        type='checkbox'
        id={todo._id}
        defaultChecked={todo.completed}
        onChange={() => toggleComplete(todo)}
      />
      <label htmlFor={todo._id} />
      <button onClick={() => removeToDo(todo)}>
        <i className='fa fa-trash' />
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default ToDoItem;
