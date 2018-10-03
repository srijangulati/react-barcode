import React, { Component } from 'react';
import Scanner from './Scanner';
import Result from './Result';

export default class App extends Component{
    state = {
        scanning: false,
        results: []
    }
    render() {
        return (
            <div>
                <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
                <ul className="results">
                    {this.state.results.map((result,index) => (<Result key={index} result={result} />))}
                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
            </div>
        );
    }

    _scan=()=>{
        this.setState({scanning: !this.state.scanning});
    }

    _onDetected=(result)=>{
        console.log(result);
        this.setState({results: this.state.results.concat([result])});
    }
}
