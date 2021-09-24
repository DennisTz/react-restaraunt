import React from 'react'
import bur1 from './images/bur1.jpg'
import bur2 from './images/bur2.jpg'
import bur3 from './images/bur3.jpg'
import { Carousel } from 'react-bootstrap'
import './Main.css'

const Main = () => {
  return (
    <div>
      <div id='mainDesc'>
        <h1 className='font-effect-fire' id='hDesc'>
          Best burger
          <br /> in town
        </h1>
        <p id='pDesc'>Huge variety</p>
        <button id='btnDesc'>Place Order</button>
      </div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            id='slides'
            className='d-block w-100'
            src={bur1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Catering</h3>
            <p>
              We make it easy to satisfy everyone’s unique cravings with our
              Custom Burger Bar delivered to you
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            id='slides'
            className='d-block w-100'
            src={bur2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Loyalty</h3>
            <p>Join our Best burger loyalty program</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            id='slides'
            className='d-block w-100'
            src={bur3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>The Best burger franchise opportunity</h3>
            <p>
              The Best burger is expanding its premium burger franchise into new
              markets
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Main
