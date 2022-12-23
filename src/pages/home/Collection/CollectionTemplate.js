import React from 'react'

function CollectionTemplate({ img, collectionProduct, collectionDescription, alt }) {
  return (
    <article className='collection-container'>
      <div className='collection-container__content'>
        <img src={img} alt={alt} className='collection-container__content__img' />
        <div className='collection-container__content__details'>
          <h3>{collectionProduct}</h3>
          <p>{collectionDescription}</p>
        </div>
      </div>
    </article>
  )
}

export default CollectionTemplate