import React, { Component, Fragment } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Result extends Component{

    showProduct(data){
      if(data == undefined || data==null){
        return null;
      }
      if(Array.isArray(data)){
        return data.map((d,index)=>(this.showProduct(d)));
      }
      if(typeof data == 'object'){
        return Object.keys(data).map((key,index)=>{
              return (
                <Fragment>
                  <ListGroupItem key={index} bsStyle="info">{key}</ListGroupItem>
                  {this.showProduct(data[key])}
                </Fragment>
              );
            });
      }
      if(typeof data == 'string'|| typeof data == 'number' || typeof data == 'boolean'){
        return (<ListGroupItem>{data}</ListGroupItem>);
      }
    }
    render() {
        const result = this.props.result;

        if (!result) {
            return null;
        }
        return (<ListGroup>{this.showProduct(result)}</ListGroup>);
    }
}
