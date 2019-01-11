import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class CallToAction extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <Title />
        <Subtitle />
        <Button />
      </Col>
    );
  }
}

export default CallToAction;
