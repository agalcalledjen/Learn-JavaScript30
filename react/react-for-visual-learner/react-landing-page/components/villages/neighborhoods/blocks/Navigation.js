import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Navigation extends React.Component {
  render() {
    return (
      <Col lg={6}>
        <Branding/>
      </Col>
      <Col lg={6}>
        <DemoLink/>
      </Col>
    );
  }
}

export default Navigation;