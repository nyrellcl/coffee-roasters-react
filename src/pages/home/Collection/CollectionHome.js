import React from 'react'
import { collectionOne, collectionTwo, collectionThree, collectionFour } from '../../../Data'
import CollectionTemplate from './CollectionTemplate'

function CollectionHome() {
  return (
    <section className='collection-section'>
      <h2 className='collection-section__title'>Our collection</h2>
        <CollectionTemplate {...collectionOne} />
        <CollectionTemplate {...collectionTwo} />
        <CollectionTemplate {...collectionThree} />
        <CollectionTemplate {...collectionFour} />
    </section>
  )
}

export default CollectionHome