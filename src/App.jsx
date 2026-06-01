import React, { useState, useEffect } from 'react'

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
import WeatherBackground from './components/WeatherBackground'
import ToolBar from './components/ToolBar'

const URL = "https://api.open-meteo.com/v1/forecast?latitude=39.7392&longitude=-104.9847&models=gfs_seamless&current=temperature_2m,is_day,weather_code&timezone=America%2FDenver&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit";

function App() {
  // API call here so i can just send it as a prop to multiple components
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setWeather(data))
  }, []);

  return (
    <>
      <ToolBar/>
      <WeatherBackground weather={weather}/>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100vw', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div style={{display: 'flex', flexDirection: 'column', width: 'fit-content', alignItems: 'center'}}>          
          <div className="nameplate">Korbin Brooks</div>
          <div className="description">Hello, I'm Korbin Brooks!</div>
        </div>

        <ProfilePicture/>
      </div>
      
      
        <ClearContainer>
      
        <div className="social-icons" id="social_icons">
          <MediaIcon className="github-icon" image={githubImage} onClick={() => open('https://github.com/Korbanzo')}/>
          <MediaIcon className="resume-icon" image={resumeImage} onClick={() => open(`${resumeDoc}`)}/>
          <MediaIcon className="linkedin-icon" image={linkedinImage} onClick={() => open('https://www.linkedin.com/in/korbinbrooks')}/>
          <MediaIcon className="email-icon" image={emailImage} onClick={() => open("mailto:Brooks.m.Korbin@gmail.com")}/>
        </div>
      
        <div className="projects-section" id="project_browser">
          <ProjectBrowser></ProjectBrowser>
        </div>
      
        <div className="weather-section">
          <WeatherDenver/>
        </div>
        </ClearContainer>
    
    </>
  )
}

export default App;