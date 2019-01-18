import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <Header />
        <SectionA />
        <SectionB />
        <SectionC />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
