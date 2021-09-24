import React from 'react'
import './Sidebar.css'
import logo from './images/product2.jpg'

const Sidebar = () => {
  const openNav = () => {
    document.getElementById('mySidebar').style.width = '250px'
  }

  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0'
  }
  return (
    <div>
      <button className='openbtn' onClick={openNav}>
        ☰ Open Menu
      </button>
      <div id='mySidebar' className='sidebar'>
        <a className='font-effect-fire' href='#' onClick={closeNav}>
          ×
        </a>
        <a className='font-effect-fire' href='#'>
          About
        </a>
        <a className='font-effect-fire' href='#'>
          Services
        </a>
        <a className='font-effect-fire' href='#'>
          Clients
        </a>
        <a className='font-effect-fire' href='#'>
          Contact
        </a>
        <div id='logoContainer'>
          <img id='logo' alt='' src={logo} />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
