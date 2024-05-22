import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
<div className="container">
  <div className="left-header">
    <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="" />

  </div>
  <div className="center-header">
    <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/basket">Basket</Link></li>
      <li>Shop</li>
      <li>Blog</li>
      <li>About</li>
    </ul>
  </div>
  <div className="right-header">
  <i class="fa-regular fa-user"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-github"></i>
  </div>
</div>
    </div>
  )
}

export default Header