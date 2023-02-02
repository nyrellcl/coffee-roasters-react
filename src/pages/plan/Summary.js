import React from 'react'

 
function Summary(phrase) {
    //create a phrase props that targets the bean, delivery, etc

  return (
    <section className='order-summary-section'>
        <article className='order-summary-section__card'>
            <p>Order Summary</p>
            <h5><q>I drink my coffee as <span>{phrase.preference}</span>, with a <span>{phrase.beanType}</span> type of bean. <span>{phrase.amount}</span> ground a la <span>{phrase.grindType}</span>, sent to me <span>{phrase.delivery}</span>.</q></h5>
        </article>
        <div className='order-summary-section__card__button'>
            <a href='#preference'><button className='plan-btn'>Create my plan!</button></a>
        </div>
    </section>
  )
}

export default Summary

{/**Future update: When user clicks on a specific preference of their coffee, the order summary will update according to their choices. */}