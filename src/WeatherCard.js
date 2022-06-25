import React, { useEffect, useState } from 'react'

const WeatherCard = ({
  temp,
  humidity,
  pressure,
  weatherMood,
  name,
  speed,
  country,
  sunset,}) => {
  const [weatherState, setWeatherState] = useState("");

    useEffect(()=>{
      if (weatherMood) {
        switch (weatherMood) {
          case 'Clouds':
            setWeatherState('wi-day-cloudy')
            break;
          case 'Haze':
            setWeatherState('wi-day-fog')
            break;
          case 'Dust':
            setWeatherState('wi-dust')
            break;
          case 'Mist':
            setWeatherState('wi-mist')
            break;
          case 'Clear':
            setWeatherState('wi-day-sunny')
            break;
        
          default: setWeatherState('wi-day-sunny')
            break;
        }
      }
    },[weatherMood])

    // converting seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`

  return (
    <>
        <div className="wrap">
            

            {/* Temperature card */}
            <div className="widget">
              {/* 1st icon section */}
                <div className="weatherIcon">
                  <i className={`wi ${weatherState}`}></i>
                </div>
              
              {/* 2nd row section */}
                <div className="weatherInfo">
                  <div className="temperature">
                    <span>{temp}&deg;</span>
                  </div>

                  <div className="description">
                    <div className='weatherCondition'>{weatherMood}</div>
                    <div className='place'>{name}, {country}</div>
                  </div>
                </div>

                <div className="date"> {new Date().toLocaleString()} </div>

                {/* now 3rd row with 4 col section */}
                <div className="extra-temp">
                  <div className="temp-info-minmax">
                    <div className='two-sided-section'>
                      <p><i className={"wi wi-sunset"}></i></p>
                      <p className='extra-info-leftside'>{timeStr}PM <br /> Sunset</p>
                    </div>
                    <div className='two-sided-section'>
                      <p><i className={"wi wi-humidity"}></i></p>
                      <p className='extra-info-leftside'>{humidity} <br /> Humidity</p>
                    </div>
                  </div>

                  <div className="weather-extra-info">
                  <div className='two-sided-section'>
                      <p><i className={"wi wi-rain"}></i></p>
                      <p className='extra-info-leftside'>{pressure} <br /> Pressure</p>
                    </div>
                    <div className='two-sided-section'>
                      <p><i className={"wi wi-strong-wind"}></i></p>
                      <p className='extra-info-leftside'>{speed} <br /> Speed</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherCard