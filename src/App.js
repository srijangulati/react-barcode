import React, { Component, Fragment } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {Tab, Tabs} from 'react-bootstrap';

import './App.css';
import ReactScan from './components/App';
import History from './components/History';

class App extends Component {
  render() {
    return (
        <Tabs defaultActiveKey={0} id="scan-tab" style={{marginTop:10}}>
          <Tab eventKey={0} title="Scan">
            <ReactScan />
          </Tab>
          <Tab eventKey={1} title="History">
            <History />
          </Tab>
        </Tabs>
    );
  }
}

export default App;
