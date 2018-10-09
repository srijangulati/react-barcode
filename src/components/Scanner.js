import React, { Component } from 'react';
import Quagga from 'quagga';


const url = 'https://api-dev.tesco.com/product/v4/products/gtin?productNumber=';
export default class Scanner extends Component{

    state = {
      apiCallStarted:false
    }
    render() {
        return (
            <div id="interactive" className="viewport"/>
        );
    }

    fetchResults=()=>{
      let gTin = this.props.queue.dequeue();
      if(gTin){
        fetch(url+gTin+"&countryCode=IE"+"?access_token="+this.props.authToken,{
          method:"GET",
          credentials: 'include',
          mode:'cors',
          headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Authorization': 'Bearer '+this.props.authToken
          }
        })
        .then((response)=>{return JSON.parse(response)})
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }

    componentDidMount() {
        Quagga.init({
            inputStream: {
                type : "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 0,
            decoder: {
                readers : ["code_128_reader",
                            "ean_reader",
                            "ean_8_reader",
                            "code_39_reader",
                            "code_39_vin_reader",
                            "codabar_reader",
                            "upc_reader",
                            "upc_e_reader",
                            "i2of5_reader"]
            },
            locate: true
        }, function(err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
        Quagga.onDetected(this._onDetected);
    }

    componentWillUnmount() {
        Quagga.offDetected(this._onDetected);
    }

    _onDetected=(result)=>{
        //Quagga.offDetected(this._onDetected);
        //this.props.onDetected(result);
        this.props.queue.enqueue(result.codeResult.code);
        if(!this.state.apiCallStarted){
          this.setState({apiCallStarted:true},this.fetchResults)
        }
    }
}
