import React from 'react'
import AboutStyles from './styles/AboutStyles'

const About = () => {
  return (
    <AboutStyles>
      <h2>Fridge Magnets</h2>
      <h4>
        This app was originally created as a promotional event for an appliance
        company, this is the unbranded version; enjoy!
      </h4>
      <h4>
        For custom web products just like this one contact:{' '}
        <span>jeredkins@gmail.com</span>{' '}
      </h4>
      <h4>
        Or visit{' '}
        <a href="https://adk1ns.com/" target="_blank">
          <span>Adk1ns.com</span>
        </a>
      </h4>
    </AboutStyles>
  )
}

export default About
