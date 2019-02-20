import React, { Component } from 'react';
import PropTypes from 'prop-types';

// stateless component
const ToDoCount = ({ number }) => {
  return (
    <span>
      {number}
      {number > 1 ? ' Todos' : ' Todo'}
    </span>
  );
};

ToDoCount.defaultProps = {
  number: 0
};

ToDoCount.propTypes = {
  number: PropTypes.number.isRequired
};

export default ToDoCount;
