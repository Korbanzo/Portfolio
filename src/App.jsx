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
    <>
    <h1>Korbin Brooks</h1>
    <div> C++ Java React Python </div>
    <MediaIcon image={resumeImage} onClick={() => open(`${resumeDoc}`)}></MediaIcon>
    <MediaIcon image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
    <MediaIcon image={emailImage} onClick={() => open("mailto:Brooks.m.Korbin@gmail.com")}/>
    <MediaIcon image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
    
    <ProjectBrowser></ProjectBrowser>
    </>
  )
}

export default App;