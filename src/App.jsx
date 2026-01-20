import React from 'react'
import './App.css'

import githubImage from './assets/github.png'
import linkedinImage from './assets/linkedin.png'
import emailImage from './assets/email.png'
import resumeImage from './assets/resume.png'
import resumeDoc from './assets/MyResume.pdf'
import MediaIcon from './components/MediaIcon'
import ProjectBrowser from './components/ProjectBrowser'

function App() {
  return (
    <div className="container">
      <h1>Korbin Brooks</h1>
      <div> C++ Java React Python </div>
      <MediaIcon className="resume-icon" image={resumeImage} onClick={() => open(`${resumeDoc}`)}></MediaIcon>
      <MediaIcon className="github-icon" image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
      <MediaIcon className="email-icon" image={emailImage} onClick={() => open("mailto:Brooks.m.Korbin@gmail.com")}/>
      <MediaIcon className="linkedin-icon" image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
      <ProjectBrowser></ProjectBrowser>
    </div>
  )
}

export default App;