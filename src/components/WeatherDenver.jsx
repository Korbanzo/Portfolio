import React, { useState, useEffect } from 'react'
import ClearDay from "../assets/weathericons/clearday.png"
import PartlyCloudy from "../assets/weathericons/partlycloudy.png"
import Overcast from "../assets/weathericons/overcast.png"
import Fog from "../assets/weathericons/fog.png"
import Drizzle from "../assets/weathericons/drizzle.png"
import Rain from "../assets/weathericons/rain.png"
import Sleet from "../assets/weathericons/sleet.png"
import Snow from "../assets/weathericons/snow.png"
import ThunderStorm from "../assets/weathericons/thunderstorm.png"

const URL = "https://api.open-meteo.com/v1/forecast?latitude=39.7392&longitude=-104.9847&models=gfs_seamless&current=temperature_2m,is_day,weather_code&timezone=America%2FDenver&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit"

const WeatherCodes = {
    0 : "Clear",
    1 : "Mainly Clear",
    2 : "Partly Cloudy",
    3 : "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Dense Drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Light showers",
    81: "Showers",
    82: "Violent showers",
    85: "Light snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorms"
}

const WeatherIcons = {
    "Clear": ClearDay,
    "Mainly Clear": PartlyCloudy,
    "Partly Cloudy": PartlyCloudy,
    "Overcast": Overcast,
    "Fog": Fog,
    "Depositing rime fog": Fog,
    "Light Drizzle": Drizzle,
    "Drizzle": Drizzle,
    "Dense Drizzle": Drizzle,
    "Light rain": Rain,
    "Rain": Rain,
    "Heavy rain": Rain,
    "Light freezing rain": Sleet,
    "Heavy freezing rain": Sleet,
    "Light snow": Snow,
    "Snow": Snow,
    "Heavy snow": Snow,
    "Snow grains": Snow,
    "Light showers": Drizzle,
    "Showers": Drizzle,
    "Violent showers": Drizzle,
    "Light snow showers": Snow,
    "Heavy snow showers": Snow,
    "Thunderstorms": ThunderStorm
}



const WeatherDenver = () => {

    const [weather, setWeather] = useState(null);

    useEffect( () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data); 
            });
    }, [])

    if (!weather) return <p>loading weather...</p>

    const feetPerMeter = 3.28084;

    const currentWeather = WeatherCodes[weather.current.weather_code];
    const currentIcon = WeatherIcons[currentWeather]

    return (
        <>
            <h2 style={{ margin: '0 0 1rem 0' }}>Denver, Colorado</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", width: '100%', gap: '1.5rem', alignItems: 'center'}}>
                <div style={{
                    backgroundImage: `url(${currentIcon})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '75px',
                    height: '75px',
                    flexShrink: 0
                }}/>

                <div style={{display: 'flex', flexDirection: "column", gap: '0.5rem'}}>
                    <p style={{ margin: 0 }}>{weather.current.temperature_2m.toFixed(0)} {weather.current_units.temperature_2m}</p>
                    <p style={{ margin: 0}}>{currentWeather}</p>
                </div>
            </div>
        </>
    );

}

export default WeatherDenver;