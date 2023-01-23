import React from 'react'

function HeadquartersTemplate({ locationImg, locationAlt, locationName, locationAddress, locationRegion, locationContact }) {
    return (
        <article className='headquarters-section__content'>
            <img src ={locationImg} alt={locationAlt} className='location-img' />
            <h5>{locationName}</h5>
            <div className='headquarters-section__content__details'>
                <span>{locationAddress}</span>
                <span>{locationRegion}</span>
                <span>{locationContact}</span>

            </div>
        </article>
    )
}

export default HeadquartersTemplate