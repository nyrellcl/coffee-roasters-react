import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/shared/desktop/logo.svg"
import { FaBars, FaTimes } from 'react-icons/fa'
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
        {click ? <FaTimes /> : <FaBars />}
        </nav>
        <ul className={click ? 'nav-list active' : 'nav-list'}>
          <li><Link to="/coffee-roasters-react" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/plan" onClick={closeMobileMenu}>Create Your Plan</Link></li>
        </ul>
    </header>
  )
}

export default Nav