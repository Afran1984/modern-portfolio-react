import React from 'react'
import Banner from '../Shares/Banner/Banner'
import Service from '../Shares/Service/Service'
import Portfolio from '../Shares/Portfolio/Portfolio'
import Resharge from '../Shares/Resharge/Resharge'
import Experiance from '../Shares/Experience/Experiance'
import About from '../Shares/About/About'
import Contact from '../Shares/Contact/Contact'
import SkillsEducation from '../Shares/SkillsEducation/SkillsEducation'



const Home = () => {
  return (
    <>
      <Banner></Banner>
        <Service></Service>
        <Portfolio></Portfolio>
        <Experiance></Experiance>
        <Resharge></Resharge>
        <About></About>
        <SkillsEducation></SkillsEducation>
        <Contact></Contact>
      
    </>
  )
}

export default Home