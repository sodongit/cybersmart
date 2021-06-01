export const dataDictionary = {
    "lat": " Latitude (Degrees)",
    "lon": " Longitude (Degrees)",
    "sunrise": " Sunrise time (HH:MM)",
    "sunset": " Sunset time (HH:MM)",
    "timezone": " Local IANA Timezone",
    "station": " Source station ID",
    "ob_time": " Last observation time (YYYY-MM-DD HH:MM)",
    "datetime": " Current cycle hour (YYYY-MM-DD:HH)",
    "ts": " Last observation time (Unix timestamp)",
    "city_name": " City name",
    "country_code": " Country abbreviation",
    "state_code": " State abbreviation/code",
    "pres": " Pressure (mb)",
    "slp": " Sea level pressure (mb)",
    "wind_spd": " Wind speed (Default m/s)",
    "wind_dir": " Wind direction (degrees)",
    "wind_cdir": " Abbreviated wind direction",
    "wind_cdir_full": " Verbal wind direction",
    "temp": " Temperature (default Celcius)",
    "app_temp": " Apparent/'Feels Like' temperature (default Celcius)",
    "rh": " Relative humidity (%)",
    "dewpt": " Dew point (default Celcius)",
    "clouds": " Cloud coverage (%)",
    "pod": " Part of the day (d = day / n = night)",
    "weather": {
        "icon": "Weather icon code",
        "code": "Weather code",
        "description": " Text weather description"
    },
    "vis": " Visibility (default KM)",
    "precip": " Liquid equivalent precipitation rate (default mm/hr)",
    "snow": " Snowfall (default mm/hr)",
    "uv": " UV Index (0-11+)",
    "aqi": " Air Quality Index [US - EPA standard 0 - +500",
    "dhi": " Diffuse horizontal solar irradiance (W/m^2) [Clear Sky]",
    "dni": " Direct normal solar irradiance (W/m^2) [Clear Sky]",
    "ghi": " Global horizontal solar irradiance (W/m^2) [Clear Sky]",
    "solar_rad": " Estimated Solar Radiation (W/m^2)",
    "elev_angle": " Solar elevation angle (degrees)",
    "h_angle": " Solar hour angle (degrees)",
};

export const weatherBitKey = "d411e9512c494c6cb2c1e113b5907e03";
export const weatherBitUrl = "https://api.weatherbit.io/v2.0/current";

export const resourceText = {
    cpuTempError: 'There was an error with getting the cpu temperature',
    cpuTemp: 'There cpu temperature is {0}',
    weatherTempError: 'There was an error with getting the weather temperature',
    weatherTemp: 'It\'s {0}C outside'
};
