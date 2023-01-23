import React from 'react'


function Summary() {
  return (
    <section className='order-summary-section'>
        <article className='order-summary-section__card'>
            <p>Order Summary</p>
            <h5><q>I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g</span> ground a la <span>Cafetiere</span>, sent to me <span>Every Week</span>.</q></h5>
        </article>
        <div className='order-summary-section__card__button'>
            <a href='#preference'><button className='plan-btn'>Create my plan!</button></a>
        </div>
    </section>
  )
}

export default Summary

{/**Future update: When user clicks on a specific preference of their coffee, the order summary will update according to their choices. */}