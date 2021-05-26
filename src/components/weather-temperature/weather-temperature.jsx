import React, {useState, useEffect} from 'react';

export function WeatherTemperature () {

    const [ambientTemp, setAmbientTemp] = useState();

    useEffect(() => {
        if (ambientTemp === undefined) {
            setAmbientTemp(12);
        }
    }, [ambientTemp])
    return <div>
        <span>It's {ambientTemp}C outside</span>
    </div>

}