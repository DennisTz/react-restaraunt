import React from 'react'
import deal from './images/deal.jpg'
import './Deal.css'
const Deal = () => {
  return (
    <div id='container'>
      <img id='deal' alt='' src={deal} />
      <div id='dealDesc'>
        <h1 id='hDeal'>Deal of the day</h1>
        <p id='pDeal'>Texas Burger from Lohfelden</p>
        <button id='btnDeal'>Order Now</button>
      </div>
    </div>
  )
}

export default Deal
