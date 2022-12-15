import React from 'react'

function ProcessTemplate({spanNum, processHeading, processDescription}) {
  return (
    <article className='process-container__card'>
        <div className='process-container__card__content'>
            <span>{spanNum}</span>
            <h6>{processHeading}</h6>
            <p>{processDescription}</p>
        </div>
    </article>
  )
}

export default ProcessTemplate