import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export class Body extends Component {
  state = {
    transparent: false,
    counter: 0
  }

  transparentStyle = () => {
    if (this.state.transparent) {
      return { opacity: .5 }
    }
    else {
      return { opacity: 1 }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Carousel interval={null}>

          <Carousel.Item>
            <img
              className="w-100"
              src="img/1.jfif"
              alt="First slide"
              style={this.transparentStyle()}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/2.jfif"
              alt="Third slide"
              style={this.transparentStyle()}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/3.jfif"
              alt="Third slide"
              style={this.transparentStyle()}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </Container>
        </Jumbotron>
        <Container>

          <p style={{ color: 'red', backgroundColor: '#FFF', padding: '11px' }}>this is a bootstrap container</p>

          <div className="btn-container" style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={() => this.setState({ transparent: !this.state.transparent })}>
              {this.state.transparent ? 'Make Opaque' : 'Make Transparent'}
            </Button>
            <Button
              // setState has optional 
              // onClick={() => this.setState(() => ({
              //   counter: this.state.counter + 1
              // })) } 

              onClick={() => this.setState({ counter: this.state.counter + 1 })}

            >
              Increment counter {this.state.counter}
            </Button>
          </div>


        </Container>

      </React.Fragment>
    )
  }
}




export default Body
