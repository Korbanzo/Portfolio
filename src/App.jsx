import React from 'react'
import './App.css'

import githubImage from './assets/github.png'
import linkedinImage from './assets/linkedin.png'
import emailImage from './assets/email.png'
import resumeImage from './assets/resume.png'
import resumeDoc from './assets/MyResume.pdf'
import MediaIcon from './components/MediaIcon'
import ProjectBrowser from './components/ProjectBrowser'
import ClearContainer from './components/ClearContainer'
import ProfilePicture from './components/ProfilePicture'
import WeatherDenver from './components/WeatherDenver'

function App() {
  
  // Have a background that matches the weather in Denver. (Snowy -> Snowing down the background of the page)
  // #7ef97e text color

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>

      <ClearContainer>
        <div className="nameplate">
          Korbin Brooks
        </div>

        <div className="social-icons">
          <MediaIcon className="resume-icon" image={resumeImage} onClick={() => open(`${resumeDoc}`)}/>
          <MediaIcon className="github-icon" image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
          <MediaIcon className="email-icon" image={emailImage} onClick={() => open("mailto:Brooks.m.Korbin@gmail.com")}/>
          <MediaIcon className="linkedin-icon" image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
        </div>
        
        <div className="projects-section">
          <ProjectBrowser></ProjectBrowser>
        </div>

        <div className="weather-section">
          <WeatherDenver/>
        </div>

      </ClearContainer>
    </div> 
    </>
  )
}

export default App;