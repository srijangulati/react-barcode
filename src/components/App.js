import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Scanner from './Scanner';
import Result from './Result';

export default class App extends Component{
    state = {
        scanning: false,
        results: []
    }
    render() {
        return (
            <Grid>
                <Row>
                  <Col xs={12} md={4} mdOffset={4}>
                    <Button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
                  </Col>
                  <Col xs={12} md={6}>
                    <ul className="results">
                        {this.state.results.map((result,index) => (<Result key={index} result={result} />))}
                    </ul>
                  </Col>
                </Row>
            </Grid>
        );
    }

    _scan=()=>{
        this.setState({scanning: !this.state.scanning});
    }

    _onDetected=(result)=>{
        console.log(result);
        this.setState({results: [result], scanning:false});
    }
}
