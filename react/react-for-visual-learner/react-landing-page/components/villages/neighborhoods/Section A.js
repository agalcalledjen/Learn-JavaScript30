import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class SectionA extends React.Component {
  render() {
    return (
      <section className="section-a">
        <Container>
          <Row>
            <SectionDescription />
            <Laptop />
          </Row>
        </Container>
      </section>
    );
  }
}

export default SectionA;
