import React from 'react'
import product1 from './images/product1.jpg'
import product2 from './images/product2.jpg'
import product3 from './images/product3.jpg'
import './Products.css'
const Products = () => {
  return (
    <div>
      <h1 className='font-effect-fire' id='prodTitle'>
        Choose your favorites
      </h1>
      <div className='container'>
        <div className='content'>
          <img id='sel' alt='' src={product1} />
          <h3>Breakfast Burger</h3>
          <h5>
            all-natural angus beef, tillamook cheddar, lettuce blend, tomatoes,
            red onions, pickles, the counter relish, brioche bun
          </h5>
          <h1 style={{ margin: '2rem' }}>$11.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
        <div className='content'>
          <img id='sel' alt='' src={product2} />
          <h3>Sprouted Veggie </h3>
          <h5>
            vegan veggie, organic mixed greens, red onions, roasted red peppers,
            alfalfa sprouts, dijon balsamic, multigrain bun
          </h5>
          <h1 style={{ margin: '2rem' }}>$10.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
        <div className='content'>
          <img id='sel' alt='' src={product3} />
          <h3>Juicy Lucy</h3>
          <h5>
            all-natural angus beef filled with melted cheese, caramelized
            onions, pickles, tangy lucy sauce, brioche bun
          </h5>
          <h1 style={{ margin: '2rem' }}>$13.99</h1>
          <button className='btnProducts'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Products
