import { weatherBitUrl, weatherBitKey} from "../shared/constants";

export async function getAmbientTemperature() {

    const {data} = await weatherApiCall();
    // full list of attributes for the response in constants.js or
    const {[0]: {temp}} = data;
    return temp;
}

function weatherApiCall() {
    // weatherbit API docs https://www.weatherbit.io/api/weather-current

    const requestString = `?key=${weatherBitKey}&lang=en&units=M&lat=53.944&lon=-1.088`;

    const request = new Request(`${weatherBitUrl}${requestString}`);
    return fetch(request)
        .then((response) => response.json());
}
