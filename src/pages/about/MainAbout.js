import React from 'react'
import HeroAbout from './HeroAbout'
import "../../Index-SCSS/index.css"
import Commitment from './Commitment'
import Quality from './Quality'
import MainHeadquarters from './Headquarters/MainHeadquarters'

function MainAbout() {
  return (
    <>
    <HeroAbout/>
    <Commitment/>
    <Quality/>
    <MainHeadquarters/>
    </>
  )
}

export default MainAbout