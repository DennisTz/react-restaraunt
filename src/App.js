import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Products from './components/Products/Products'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Extras from './components/Extras/Extras'
import Deal from './components/Deal/Deal'

function App () {
  return (
    <Router>
      <Main />
      <Sidebar />
      <Products />
      <Deal />
      <Extras />
      <Footer />
    </Router>
  )
}

export default App
