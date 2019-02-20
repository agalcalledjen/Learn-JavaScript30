import React, { Component } from 'react';
import PropTypes from 'prop-types';

// stateless component
const ClearButton = ({ removeCompleted }) => {
  return <button onClick={() => removeCompleted()}>Clear Completed</button>;
};

ClearButton.propTypes = { removeCompleted: PropTypes.func.isRequired };

export default ClearButton;
