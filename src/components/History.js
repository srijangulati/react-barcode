import React, { Component, Fragment } from 'react';
import {ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
export default class History extends Component{
  render(){
    return(
      <Fragment>
        <PageHeader>Recently Scanned ProductIds</PageHeader>
        <ListGroup>
          {(localStorage.getItem('history'))?JSON.parse(localStorage.getItem('history')).map((d,index)=>(<ListGroupItem key={index}>{d}</ListGroupItem>)):<ListGroupItem>No Products Scanned</ListGroupItem>}
        </ListGroup>
      </Fragment>
    );
  }
}
