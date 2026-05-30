import WeatherDenver from './WeatherDenver';
import PixelSnow from './PixelSnow'
import Grainient from './Grainient'
import Lightning from './Lightning'
import Waves from './Waves'
import React, { useState, useEffect } from 'react'

const URL = "https://api.open-meteo.com/v1/forecast?latitude=39.7392&longitude=-104.9847&current=weather_code"


const ClearDay = (
    <Grainient
    color1="#EAB308"
    color2="#06B6D4"
    color3="#3B82F6"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
)

const PartlyCloudy = (
    <Grainient
    color1="#EAB308"
    color2="#06B6D4"
    color3="#979797"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
)

const Overcast = (
    <Grainient
    color1="#979797"
    color2="#d1e6f1"
    color3="#a1a665"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
)

const Fog = Overcast

const Drizzle = (
      <Waves
    lineColor="#3410c1"
    backgroundColor="#000000"
    waveSpeedX={0.04}
    waveSpeedY={0.1}
    waveAmpX={40}
    waveAmpY={35}
    friction={0.9}
    tension={0.015}
    maxCursorMove={30}
    xGap={12}
    yGap={38}
  />
)

const Rain = Drizzle
const Sleet = Drizzle

const ThunderStorm = (
  <Lightning
    hue={232}
    xOffset={0}
    speed={3.1}
    intensity={0.4}
    size={1.4}
  />
)

const Snow = (
    <PixelSnow
        style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
    />
);

const WeatherCodes = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light Drizzle',
    53: 'Drizzle',
    55: 'Dense Drizzle',
    61: 'Light rain',
    63: 'Rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Light snow',
    73: 'Snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Light showers',
    81: 'Showers',
    82: 'Violent showers',
    85: 'Light snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorms'
}

const WeatherBackgrounds = {
    'Clear': ClearDay,
    'Mainly Clear': PartlyCloudy,
    'Partly Cloudy': PartlyCloudy,
    'Overcast': Overcast,
    'Fog': Fog,
    'Depositing rime fog': Fog,
    'Light Drizzle': Drizzle,
    'Drizzle': Drizzle,
    'Dense Drizzle': Drizzle,
    'Light rain': Rain,
    'Rain': Rain,
    'Heavy rain': Rain,
    'Light freezing rain': Sleet,
    'Heavy freezing rain': Sleet,
    'Light snow': Snow,
    'Snow': Snow,
    'Heavy snow': Snow,
    'Snow grains': Snow,
    'Light showers': Drizzle,
    'Showers': Drizzle,
    'Violent showers': Drizzle,
    'Light snow showers': Snow,
    'Heavy snow showers': Snow,
    'Thunderstorms': ThunderStorm
}

const WeatherBackground = ({ weather }) => {
    if (!weather || !weather.current) return null
    const code = weather.current.weather_code
    const label = WeatherCodes[code]
    const background = WeatherBackgrounds[label] || null
    return <div className="weather-background">{background}</div>;
}

export default WeatherBackground