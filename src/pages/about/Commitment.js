import React from 'react'
import commitmentImage from "../../assets/about/mobile/image-commitment.jpg"

function Commitment() {
  return (
    <section className='commitment-section'>
        <img src={commitmentImage} alt='commitment-Image' className='commitment-image'/>
        <article className='commitment-section__content'>
            <h2>Our commitment</h2>
            <p>We're built on simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training , support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their natice growing region.</p>

        </article>
    </section>
  )
}

export default Commitment