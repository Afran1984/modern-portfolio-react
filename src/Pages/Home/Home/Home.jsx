import React from 'react'
import Banner from '../Shares/Banner/Banner'
import Service from '../Shares/Service/Service'
import Portfolio from '../Shares/Portfolio/Portfolio'
import Resharge from '../Shares/Resharge/Resharge'
import Experiance from '../Shares/Experience/Experiance'
import About from '../Shares/About/About'
import Contact from '../Shares/Contact/Contact'
import SkillsEducation from '../Shares/SkillsEducation/SkillsEducation'
import CustomCarsor from '@/components/CustomCarsor/CustomCarsor'
import TestimonialsCard from '../Shares/TestimonialsCard/TestimonialsCard'
import AdModal from '../AdModal/AdModal'




const Home = () => {
  return (
    <>
    <div className="relative min-h-screen">
      <AdModal></AdModal>

      
      <Banner></Banner>
        <Service></Service>
        <Portfolio></Portfolio>
        <Experiance></Experiance>
        <Resharge></Resharge>
        <About></About>
        <SkillsEducation></SkillsEducation>
        <TestimonialsCard></TestimonialsCard>
        <Contact></Contact>
        <CustomCarsor></CustomCarsor>
      </div>
    </>
  )
}

export default Home