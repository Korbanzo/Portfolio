import WeatherDenver from './WeatherDenver';
import PixelSnow from './PixelSnow'

const ClearDay = '';
const PartlyCloudy = '';
const Overcast = '';
const Fog = '';
const Drizzle = '';
const Rain = '';
const Sleet = '';
const ThunderStorm = '';

const Snow = <PixelSnow
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

const WeatherBackgrounds = {
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

const currentBackground = WeatherBackgrounds["Snow"];

const WeatherBackground = ({ weatherType }) => {

    return (
        currentBackground    
    );

}

export default WeatherBackground;