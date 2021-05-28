import React, {useState, useEffect} from 'react';
import {getAmbientTemperature} from "../../services/weather";

export function WeatherTemperature () {

    const [ambientTemp, setAmbientTemp] = useState();

    useEffect(() => {
        if (ambientTemp === undefined) {
            getAmbientTemperature()
                .then((temp) => setAmbientTemp(temp));
        }
    }, [ambientTemp])
    return <div>
        <span>It's {ambientTemp}C outside</span>
    </div>

}