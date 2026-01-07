import React from 'react'
import githubImage from './assets/github.png'
import linkedinImage from './assets/linkedin.png'
import MediaIcon from './components/MediaIcon'
import './App.css'

function App() {
  return (
    <>
    <h1>Korbin Brooks</h1>
    <div> C++ Java React Python </div>
    <MediaIcon image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
    <MediaIcon image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
    </>
  )
}

export default App;