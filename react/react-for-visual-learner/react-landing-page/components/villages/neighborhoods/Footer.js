import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <Navigation />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Footer;
