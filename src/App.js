import React, { useState } from 'react';
import { getCityData } from './api';
import { CityButtons } from './components/CityButtons/CityButtons';
import { API_ID, URL_BASE, kelvinScale } from './constants';
import './App.scss';

export const App = () => {
  const [currentCity, setCity] = useState(null);
  const [currentCityName, setCurrentCityName] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const loadData = async(cityName) => {
    if (currentCity !== null && currentCity.name === cityName) {
      return;
    }

    const cityData = await getCityData(`${URL_BASE}${cityName}${API_ID}`);

    const {
      name,
      main: { temp, pressure, humidity },
      wind: { speed, deg },
    } = cityData;

    const newCity = {
      name,
      temp,
      pressure,
      humidity,
      speed,
      deg,
    };

    setCity(newCity);
    setIsLoaded(true);
    setCurrentCityName(cityName);
  };

  return (
    <div className="app">
      <p className="app__title">Api info:</p>
      <ul className="api-info">
        <li className="api-info__item">
          <p className="api-info__title">Docs:</p>
          <a
            className="api-info__link"
            href="https://openweathermap.org/current"
          >
            https://openweathermap.org/current
          </a>
        </li>
        <li className="api-info__item">
          <p className="api-info__title">Api key:</p>
          <p className="api-info__key">c2dcf8ffb5cdc3f8977bfd2ae7ea4738</p>
        </li>
      </ul>
      <h1 className="app__main-title">App</h1>
      <CityButtons currentCityName={currentCityName} loadData={loadData} />
      {!isLoaded
        ? (
          ''
        ) : (
          <>
            <h2 className="city-name">{currentCity.name}</h2>
            <ul className="whether">
              <li className="whether__item">
                <p className="whether__title">
                  Temperature:
                </p>
                <p className="whether__data">
                  {`${Math.floor(currentCity.temp - kelvinScale)} °C`}
                </p>
              </li>
              <li className="whether__item">
                <p className="whether__title">
                  Atmospheric pressure:
                </p>
                <p className="whether__data">
                  {`${currentCity.pressure} hPa`}
                </p>
              </li>
              <li className="whether__item">
                <p className="whether__title">
                  Humidity:
                </p>
                <p className="whether__data">
                  {`${currentCity.humidity} %`}
                </p>
              </li>
              <li className="whether__item">
                <p className="whether__title">
                  Wind speed:
                </p>
                <p className="whether__data">
                  {`${currentCity.speed} meter/sec`}
                </p>
              </li>
              <li className="whether__item">
                <p className="whether__title">
                  Wind direction:
                </p>
                <p className="whether__data">
                  {`${currentCity.deg} °`}
                </p>
              </li>
            </ul>
          </>
        )}
    </div>
  );
};
