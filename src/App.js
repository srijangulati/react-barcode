import React, { Component, Fragment } from 'react';
import './App.css';
import ReactScan from './components/App';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Scan your barcode
          </p>
          <Fragment>
            <ReactScan />
          </Fragment>
      </div>
    );
  }
}

export default App;
