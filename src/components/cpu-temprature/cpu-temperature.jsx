import React, {useEffect, useState} from 'react';
import {getCpuStats} from '../../services/cpu';
import {resourceText} from '../../shared/constants';

export function CpuTemperature() {
    const [cpuTemp, setCpuTemp] = useState();

    useEffect(async () => {
        const data = await getCpuStats();
        setCpuTemp(data);
    }, []);

    const cpuText = () => (
        cpuTemp === 'error' ?
            resourceText.cpuTempError :
            resourceText.cpuTemp.replace('{0]', cpuTemp)
    );

    return <React.Fragment>
        <span>{cpuText()}</span>
    </React.Fragment>
}