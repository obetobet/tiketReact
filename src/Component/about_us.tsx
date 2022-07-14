import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Button,Carousel,Image  } from 'react-bootstrap';
import axios from "axios";
export default class About extends React.Component {
    state = {
      sliders: []
    }
     
    
    componentDidMount() {
        axios.get('https://obet.pythonanywhere.com/v1/slider/', {
        headers: {
            'Authorization':'token 836a53db3ee059632f06a84ce3cebbee78a030f2'
        }
        })
        .then((res) => {
        console.log(res.data)
        const sliders = res.data;
        this.setState({ sliders });
        })
        .catch((error) => {
        console.error(error)
        })
    }
  
    render() {
      return (
        <>  







        </>
        )
    }
  }

