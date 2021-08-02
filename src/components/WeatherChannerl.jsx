import React, { useState, useEffect } from 'react';
import { fetchCityWeather } from '../API';
import { APPCONTENT } from '../constants';

const WeatherChannel = () => {
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    const getCityWeatherData = async () => {
      const cityWeatherData = await fetchCityWeather();
      if (cityWeatherData?.length > 0) setCityWeather(cityWeatherData);
    }
    getCityWeatherData();
  }, []);

  return (
    cityWeather.length > 0 ? (
      <div className="container weather-section" id="nav1">
        <h2 className="title">
          {APPCONTENT.WEATHER_HEADER}
        </h2>
        <div className="weather-region">
          {
            cityWeather?.map((weather) => (
              <div className="region-spec" key={weather?.city}>
                <h2>{weather?.city}</h2>
                <img src="./images/icon-party-sunny.svg" alt="Weather" />
                <p>{`${weather?.temp_Celsius}°`}</p>
              </div>
            ))
          }
        </div>
      </div>
    ) : null
  )
}
export default WeatherChannel;