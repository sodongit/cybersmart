const util = require('util');
const exec = util.promisify(require('child_process').exec);
const command = "Get-CIMInstance -Query 'SELECT * FROM Win32_PerfFormattedData_Counters_ThermalZoneInformation' -Namespace 'root/CIMV2'";
const { ipcMain } = require('electron');

async function getStats() {
    try {
        // TODO Get the command to work
        // The command will work on powershell but not here for some reason.
        const { stdout: { Temperature = '273'}} = await exec(command);
        // the temperature is in kelvin
        return parseInt(Temperature, 10) - 273;
    } catch (error) {
        console.log('Error during getting GPU temperature: ', error);
        return 'error';
    }
}

ipcMain.handle('get-cpu-temperature', async () => {
    return await getStats();
});


