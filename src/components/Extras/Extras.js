import React from 'react'
import product1 from './images/product1.jpg'
import product2 from './images/product2.jpg'
import product3 from './images/product3.jpg'
import './Extras.css'
const Extras = () => {
  return (
    <div>
      <h1 className='font-effect-fire' id='extrasTitle'>
        Choose your extras
      </h1>
      <div className='container'>
        <div className='content'>
          <img id='sel' alt='' src={product1} />
          <h3>Parmesan Fries</h3>
          <h5>garlic aioli, rosemary, parsley</h5>
          <h1 style={{ margin: '2rem' }}>$5.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
        <div className='content'>
          <img id='sel' alt='' src={product2} />
          <h3>Onion Strings</h3>
          <h5>hickory bbq, buttermilk ranch</h5>
          <h1 style={{ margin: '2rem' }}>$3.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
        <div className='content'>
          <img id='sel' alt='' src={product3} />
          <h3>Shakes</h3>
          <h5>chocolate, vanilla or strawberry</h5>
          <h1 style={{ margin: '2rem' }}>$7.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Extras
