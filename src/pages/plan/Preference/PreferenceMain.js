import React from 'react'
import { coffeeDrink, coffeeType, coffeeAmount, coffeeGrind, coffeeDeliver } from "../../../Data"
import PreferenceTemplate from './PreferenceTemplate'
import "../../../Index-SCSS/index.css"

function PreferenceMain() {
  return (
    <section className='preference-section' id='preference'>
      <article className='preference-section__container'>
        <aside className='preference-section__container__steps'>
          <nav className='preference-section__container__steps__menu'>
            <ul className='preference-section__container__steps__menu__list'>
            <a href='#options'><span>01</span><li>Preferences</li></a>
            <hr></hr>
            <a href='#bean'><span>02</span><li>Bean Type</li></a>
            <hr></hr>
            <a href='#quantity'><span>03</span><li>Quantity</li></a>
            <hr></hr>
            <a href='#grind'><span>04</span><li>Grind Option</li></a>
            <hr></hr>
            <a href='#delivery'><span>05</span><li>Deliveries</li></a>


            </ul>
          </nav>
        </aside>

        <PreferenceTemplate {...coffeeDrink} />
        <PreferenceTemplate {...coffeeType} />
        <PreferenceTemplate {...coffeeAmount} />
        <PreferenceTemplate {...coffeeGrind} />
        <PreferenceTemplate {...coffeeDeliver} />

      </article>
    </section>
  )
}

export default PreferenceMain