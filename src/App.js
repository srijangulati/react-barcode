import React, { Component, Fragment } from 'react';
import './App.css';
import ReactScan from './components/App';

class App extends Component {
  render() {
    return (
      <div>
          <Fragment>
            <ReactScan />
          </Fragment>
      </div>
    );
  }
}

export default App;
