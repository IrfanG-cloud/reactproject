import React, { Component } from 'react';
import Home from './Home/Home';
import './App.css';
import Header from '../../src/shared/components/layout/Header';
import Footer from '../../src/shared/components/layout/Footer';
import Content from '../../src/shared/components/layout/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />
        <Content>
          <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;