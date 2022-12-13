import React from 'react'
import {Link} from 'react-router-dom'
import footerLogo from "../assets/shared/desktop/logo.svg"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"

function Footer() {
  return (
    <footer className='footer-container'>
        <div>
            <img className='footer-container__logo' src={footerLogo} alt=""/>
        </div>

        <nav className='footer-nav-bar'>
            <ul className='footer-nav-bar__list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/plan">Create Your Plan</Link></li>
            </ul>
        </nav>

        <nav className='footer-links'>
            <ul className='footer-links__list'>
                <li><Link><img src={facebook} alt="facebook-icon"/></Link></li>
                <li><Link><img src={instagram} alt="instagram-icon"/></Link></li>
                <li><Link><img src={twitter} alt="twitter-icon"/></Link></li>
            </ul>
        </nav>

    </footer>
  )
}

export default Footer