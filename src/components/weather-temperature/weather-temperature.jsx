import React, {useState, useEffect} from 'react';
import {resourceText} from '../../shared/constants';
import {getAmbientTemperature} from "../../services/weather";

export function WeatherTemperature() {

    const [ambientTemp, setAmbientTemp] = useState();

    useEffect(() => {
        if (ambientTemp === undefined) {
            getAmbientTemperature()
                .then((temp) => setAmbientTemp(temp));
        }
    }, [ambientTemp]);

    const getWeatherText = () => (
        ambientTemp === 'error' ?
            resourceText.weatherTempError :
            resourceText.weatherTemp.replace('{0}', ambientTemp)
    )

    return <React.Fragment>
        <span>{getWeatherText()}</span>
    </React.Fragment>;

}


