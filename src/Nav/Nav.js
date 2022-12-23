import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/shared/desktop/logo.svg"
<<<<<<< HEAD
import iconHam from "../assets/shared/mobile/icon-hamburger.svg"
import iconClose from "../assets/shared/mobile/icon-close.svg"
=======
import { FaBars, FaTimes } from 'react-icons/fa'
>>>>>>> 67dd6e8d73de20e49bb67335f42055dd9a7e0239
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
<<<<<<< HEAD
            {click ? {iconHam} : {iconClose}}
        </nav>
        <ul className={click ? 'nav-list active' : 'nav-list'}>
          <li><Link to="/coffee-roasters-react" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/plan" onClick={closeMobileMenu}>Plan</Link></li>
=======
        {click ? <FaTimes /> : <FaBars />}
        </nav>
        <ul className={click ? 'nav-list active' : 'nav-list'}>
          <li><Link to="/coffee-roasters-react" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/plan" onClick={closeMobileMenu}>Create Your Plan</Link></li>
>>>>>>> 67dd6e8d73de20e49bb67335f42055dd9a7e0239
        </ul>
    </header>
  )
}

export default Nav