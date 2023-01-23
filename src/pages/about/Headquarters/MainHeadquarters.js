import React from 'react'
import { locationOne, locationTwo, locationThree } from "../../../Data"
import HeadquartersTemplate from './HeadquartersTemplate'
import "../../../Index-SCSS/index.css"

function MainHeadquarters() {
    return (
        <section className='headquarters-section'>
            <h4>Our headquarters</h4>
            <div className='headquarters-section__container'>
                <HeadquartersTemplate {...locationOne} />
                <HeadquartersTemplate {...locationTwo} />
                <HeadquartersTemplate {...locationThree} />

            </div>
        </section>
    )
}

export default MainHeadquarters