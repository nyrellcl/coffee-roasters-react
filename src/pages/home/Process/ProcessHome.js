import React from 'react'
import {processOne, processTwo, processThree} from "../../../Data"
import ProcessTemplate from './ProcessTemplate'
import {Link} from 'react-router-dom'
import "../../../Index-SCSS/index.css"

function ProcessHome(lineDecor) {
  return (
    <section className='process-section'>
        <h4>How it works</h4>
        <div className={lineDecor ? 'line-decor' : 'line-decor dark'}>
          <div className='circle-container'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
         <div className='process-container'>
            <ProcessTemplate {...processOne}/>
            <ProcessTemplate {...processTwo}/>
            <ProcessTemplate {...processThree}/>
         </div>
            <div className='btn-container'>
                <Link>
                <button type='button' className='plan-btn'>Create your plan</button>
                </Link>
            </div>
    </section>
  )
}

export default ProcessHome