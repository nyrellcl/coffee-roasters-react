import React from 'react'
import { FaCaretUp } from "react-icons/fa"

function PreferenceTemplate({ preferenceHeading, preferenceTypeOne, preferenceTypeTwo, preferenceTypeThree, preferenceDescriptionOne, preferenceDescriptionTwo, preferenceDescriptionThree, preferenceCardOne, preferenceCardTwo ,preferenceCardThree, coffeeId }) {
    return (
        <article className='preference-section__content' id={coffeeId}>
            <div className='preference-section__content__heading'>
                <h3>{preferenceHeading}</h3>
                <span><FaCaretUp/></span>
            </div>
            <div className='preference-section__content__container'>
                <div className='preference-section__content__container__card'>
                    <h4>{preferenceTypeOne}</h4>
                    <p>{preferenceDescriptionOne}</p>
                </div>
                <div className='preference-section__content__container__card'>
                    <h4>{preferenceTypeTwo}</h4>
                    <p>{preferenceDescriptionTwo}</p>
                </div>
                <div className='preference-section__content__container__card'>
                    <h4>{preferenceTypeThree}</h4>
                    <p>{preferenceDescriptionThree}</p>
                </div>
            </div>
        </article>
    )
}

export default PreferenceTemplate