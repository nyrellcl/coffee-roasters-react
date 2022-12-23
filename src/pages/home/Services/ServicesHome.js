import React from 'react'
import ServicesTemplate from './ServicesTemplate'
import { serviceOne, serviceTwo, serviceThree } from "../../../Data"


function ServicesHome() {
    return (
        <section className='service-section'>
            <article className='service-section__intro'>
                <h4>Why choose us?</h4>
                <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </article>
            <div className='service-card-container'>
            <ServicesTemplate {...serviceOne}/>
            <ServicesTemplate {...serviceTwo}/>
            <ServicesTemplate {...serviceThree}/>
            </div>
        </section>
    )
}

export default ServicesHome