import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import './index.css'

const Temperature = () => {
  const [searchValue, setSearchValue] = useState('pune');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a72fb9849967d8b75f21ea50385be7a4`
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const allWeatherDetails = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      }

      setTempInfo(allWeatherDetails);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
    <div className="wrap">
      <div className="search">
        <input type="search" placeholder='Search...' id='search' className='searchTerm'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus />
        <button className='searchButton' onClick={getWeatherInfo} >Search</button>
      </div>

      {/* card */}
      <WeatherCard {...tempInfo}/>
    </div>

    </>
  )
}

export default Temperature