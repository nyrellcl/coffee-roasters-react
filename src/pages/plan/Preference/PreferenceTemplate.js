import React from 'react'
import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

function PreferenceTemplate({ optionIdOne, optionIdTwo, optionIdThree, preferenceHeading, preferenceTypeOne, preferenceTypeTwo, preferenceTypeThree, preferenceDescriptionOne, preferenceDescriptionTwo, preferenceDescriptionThree, coffeeId }) {
    const [show, setShow] = useState(true)

    return (
        <article className='preference-section__content' id={coffeeId}>
            <div className='preference-section__content__heading'>
                <h3>{preferenceHeading}</h3>
                {show ? <FaChevronUp onClick={() => setShow(!show)}/>
                : (<FaChevronDown onClick={()=> setShow(!show)}/>)}
            </div>
            {show && (
            <div className='preference-section__content__container'>
                <div className='preference-section__content__container__card' id={optionIdOne}>
                    <h4>{preferenceTypeOne}</h4>
                    <p>{preferenceDescriptionOne}</p>
                </div>
                <div className='preference-section__content__container__card' id={optionIdTwo}>
                    <h4>{preferenceTypeTwo}</h4>
                    <p>{preferenceDescriptionTwo}</p>
                </div>
                <div className='preference-section__content__container__card' id={optionIdThree}>
                    <h4>{preferenceTypeThree}</h4>
                    <p>{preferenceDescriptionThree}</p>
                </div>
            </div>

            )}
        </article>
    )
}

export default PreferenceTemplate