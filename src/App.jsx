import React from 'react'

import githubImage from './assets/github.png'
import linkedinImage from './assets/linkedin.png'
import emailImage from './assets/email.png'
import MediaIcon from './components/MediaIcon'
import ProjectBrowser from './components/ProjectBrowser'
import './App.css'

function App() {
  return (
    <>
    <h1>Korbin Brooks</h1>
    <div> C++ Java React Python </div>
    <MediaIcon image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
    <MediaIcon image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
    <MediaIcon image={emailImage} onClick={() => open("mailto:Brooks.m.Korbin@gmail.com")}/>
    <ProjectBrowser></ProjectBrowser>
    </>
  )
}

export default App;