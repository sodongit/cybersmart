const { ipcRenderer } = window.require('electron');

export async function getCpuStats () {
    return await ipcRenderer.invoke('get-cpu-temperature');

}


