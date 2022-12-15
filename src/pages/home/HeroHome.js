import React from 'react'
import { Link } from 'react-router-dom'

function HeroHome() {
    return (
        <section className='hero-container'>
            <article className='hero-container__content'>
                <h1>Great coffee made simple.</h1>
                <p>Start your morning with the world's best coffees.
                    Try our expertly curated artisan coffees from
                    our best roasters delivered directly to your door, at
                    your schedule.
                </p>
                <div className='btn-container'>
                    <Link to="/plan">
                        <button className='plan-btn' type='button'>Create your plan</button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default HeroHome