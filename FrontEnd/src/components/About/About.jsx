import React from 'react'
import AboutHeader from './AboutComponents/AboutHeader'
import AboutSection from './AboutComponents/AboutSection'
import AboutCompany from './AboutComponents/AboutCompany'
import AboutPartners from './AboutComponents/AboutPartners'
import AboutMission from './AboutComponents/AboutMission'
import AboutParalax from './AboutComponents/AboutParalax'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutSection />
      {/* <AboutParalax /> */}
      <AboutPartners />\
      <AboutCompany />
      <AboutMission />
    </div>
  )
}

export default About