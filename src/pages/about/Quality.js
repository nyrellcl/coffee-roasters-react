import React from 'react'
import qualityImg from "../../assets/about/mobile/image-quality.jpg"
import qualityTablet from "../../assets/about/tablet/image-quality.jpg"
import qualityDesktop from "../../assets/about/desktop/image-quality.jpg"

function Quality() {
    return (
        <section className='quality-section'>
            <picture>
                <source type="image/jpeg" srcSet={qualityImg} media='(min-width: 375px)' />
                <source type="image/jpeg" srcSet={qualityTablet} media='(min-width: 768px)' />
                <source type="image/jpeg" srcSet={qualityDesktop} media='(min-width: 1200px)' />
                <img src={qualityImg} alt="coffee-cup-image" className='quality-img' />

            </picture>
            <article className='quality-section__content'>
                <h3>Uncompromising quality</h3>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bad of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </article>
        </section>
    )
}

export default Quality