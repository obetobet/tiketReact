import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Button,Carousel,Image  } from 'react-bootstrap';
import axios from "axios";
export default class Home extends React.Component {
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
        <Carousel className="pt-5">
            { this.state.sliders.map(slider =>
            <div className="col col-lg-4 grid-wrapper" >
            <Carousel.Item >
                <img
                className="d-block fluid "
                src="https://obet.pythonanywhere.com/media/slider/bg_AIbeirW.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>asd</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </div>
            )}
        </Carousel>



        </>
        )
    }
  }

