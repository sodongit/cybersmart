import React from 'react';
import {CpuTemperature} from "./cpu-temprature/cpu-temperature.jsx";
import {WeatherTemperature} from "./weather-temperature/weather-temperature.jsx";

export function Main() {
    return <div className='main-contents'>
        <div className='cpu-temperature'>
            <CpuTemperature/>
        </div>
        <div className='weather-temperature'>
            <WeatherTemperature/>
        </div>
    </div>
}