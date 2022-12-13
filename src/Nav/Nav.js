import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/shared/desktop/logo.svg"
import iconHam from "../assets/shared/mobile/icon-hamburger.svg"
import iconClose from "../assets/shared/mobile/icon-close.svg"
import "./Nav.css"

function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const logoImage = <img src={logo} alt="" onClick={closeMobileMenu}/>
  return (
    <header className='header-bar'>
        <Link to="/">
            {logoImage}
        </Link>
        
        <nav className='menu-icon' onClick={handleClick}>
            {click ? {iconHam} : {iconClose}}
        </nav>
        <ul className={click ? 'nav-list active' : 'nav-list'}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/plan" onClick={closeMobileMenu}>Plan</Link></li>
        </ul>
    </header>
  )
}

export default Nav