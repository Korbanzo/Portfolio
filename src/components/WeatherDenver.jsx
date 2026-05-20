import React, { useState, useEffect } from 'react'

const URL = "https://api.open-meteo.com/v1/forecast?latitude=39.7392&longitude=-104.9847&models=gfs_seamless&current=temperature_2m,is_day,weather_code&timezone=America%2FDenver&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit"

const WeatherDenver = () => {

    const [weather, setWeather] = useState(null);

    useEffect( () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setWeather(data));
    }, [])

    if (!weather) return <p>loading weather...</p>


    // Convert meters to feet (elevation)
    const feetPerMeter = 3.28084;
    const elevationFt = (weather.elevation * feetPerMeter).toFixed(0);

    return (
        <>
            <h2>Denver, Colorado</h2>
            <p>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</p>
            <p>Elevation: {elevationFt} ft</p>
        </>
    );

}

export default WeatherDenver;