import React from 'react'
import AboutHeader from './AboutComponents/AboutHeader'
import AboutSection from './AboutComponents/AboutSection'
import AboutCompany from './AboutComponents/AboutCompany'
import AboutPartners from './AboutComponents/AboutPartners'
import AboutMission from './AboutComponents/AboutMission'
import AboutParalax from './AboutComponents/AboutParalax'
import AboutSectionmg from './AboutComponents/AboutSectionmg'
import AboutCorporative from './AboutComponents/AboutCorporative'

const About = () => {
  return (
    <div className='pt-[80px]'>
      <AboutHeader />
      <AboutSectionmg />
      <AboutSection />
      <AboutMission />
      <AboutCompany />
      {/* <AboutParalax /> */}
      <AboutPartners />
      <AboutCorporative />
    </div>
  )
}

export default About