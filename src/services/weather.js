import { weatherBitUrl, weatherBitKey} from "../shared/constants";

export async function getAmbientTemperature() {

    const {data} = await weatherApiCall();
    const {[0]: {temp}} = data;
    return temp;
}

function weatherApiCall() {

    const requestString = `?key=${weatherBitKey}&lang=en&units=M&lat=53.944&lon=-1.088`;

    const request = new Request(`${weatherBitUrl}${requestString}`);
    return fetch(request)
        .then((response) => response.json());
}
