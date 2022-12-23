import React from 'react'

function ServicesTemplate({ serviceImg, serviceName, alt, serviceDescription }) {
    return (
        <article className='services-card'>
            <div className='services-card__content'>
                <img src={serviceImg} alt={alt} className='services-card__content__img' />
                <div className='services-card__content__details'>
                    <h5>{serviceName}</h5>
                    <p>{serviceDescription}</p>

                </div>
            </div>
        </article>
    )
}

export default ServicesTemplate