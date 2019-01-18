import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './components/villages/neighborhoods/blocks/houses/Article Cover.js';
import LandingPage from './components/villages/LandingPage.js';

class App extends React.Component {
  render() {
    return <LandingPage />;
  }
}
// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
