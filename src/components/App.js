import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Scanner from './Scanner';
import Result from './Result';
import {PRODUCTS} from '../products';

export default class App extends Component{
    state = {
        scanning: false,
        result: null
    }

    constructor(props){
      super(props);
      this.history = JSON.parse(localStorage.getItem('history'))||[];
    }

    render() {
        return (
            <Grid style={{marginTop:10}}>
                <Row>
                  <Col sm={12} md={4} mdOffset={4}>
                    <Button onClick={this._scan} block>{this.state.scanning ? 'Stop' : 'Start'}</Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={6} mdOffset={3}>
                    {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
                    {(this.state.result && !this.state.scanning)?<Result result={this.state.result}/>:null}
                  </Col>
                </Row>
            </Grid>
        );
    }

    _searchProduct=(gTin)=>{
      console.log(gTin);
      for(var i=0;i<PRODUCTS.products.length;i++){
        if(PRODUCTS.products[i].productIdentifiers.gtin === gTin){
          this.history.push(PRODUCTS.products[i].productId);
          localStorage.setItem('history',JSON.stringify(this.history));
          this.setState({result:PRODUCTS.products[i], scanning:false});
        }
      }
    }

    _scan=()=>{
        this.setState({scanning: !this.state.scanning});
    }

    _onDetected=(result)=>{
        //console.log(result);
        this._searchProduct(result.codeResult.code);
        //this.setState({results: [result]});
    }
}
