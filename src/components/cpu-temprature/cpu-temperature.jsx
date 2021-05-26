import React, {useEffect, useState} from 'react';

export function CpuTemperature() {
    const [cpuTemp, setCpuTemp] = useState();


    useEffect(() => {
        if (cpuTemp === undefined) {
            setCpuTemp(10);
        }
    }, [cpuTemp]);
    return <div>
        <span>the cputemp is {cpuTemp}C</span>
    </div>
}