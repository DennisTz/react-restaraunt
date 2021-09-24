import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='font-effect-fire' id='footTitle'>
        Best burger
      </div>
      <div id='links'>
        <a href='#' aria-label='Facebook'>
          {' '}
          <FaFacebook />
        </a>
        <a href='#' aria-label='Instagram'>
          <FaInstagram />
        </a>
        <a href='#' aria-label='Youtube'>
          <FaYoutube />
        </a>
        <a href='#' aria-label='Twitter'>
          <FaTwitter />
        </a>
        <a href='#' aria-label='Linkedin'>
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer
