import React from 'react'
import HeroPlan from './HeroPlan'
import "../../Index-SCSS/index.css"
import ProcessTemplate from '../home/Process/ProcessTemplate'
import { processOne, processTwo, processThree } from "../../Data"
import PreferenceMain from './Preference/PreferenceMain'
import Summary from './Summary'



function Mainplan() {
    return (
        <>
            <HeroPlan />
            <section className='process-section dark'>
                <div className='process-container'>
                    <ProcessTemplate {...processOne} />
                    <ProcessTemplate {...processTwo} />
                    <ProcessTemplate {...processThree} />
                </div>
            </section>
            <PreferenceMain/>
            <Summary/>
        </>
    )
}

export default Mainplan