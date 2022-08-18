import lake_bg from './assets/lake_bg.jpg';
import hot2 from './assets/hot2.jpg';
import Description from './components/Description';
import Judul from './components/judul';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weatherServics';


function App() {
  

  const [city, setCity] = useState("Surabaya");
  const [weather, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hot2);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeatherData(data);

      // Dynamic Background
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(lake_bg);
      else setBg(hot2);
    };

    fetchWeatherData()
  },[units, city])


  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial")
  };


  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section__input">
              <input
                onKeyDown = {enterKeyPressed} 
                type="text" 
                name="city"
                placeholder="Enter the City.." 
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>

          <div className="section section__temperature">
            <di className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src= {weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </di>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${
                units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>

          {/* bottom description */}
          <Description weather={weather} units={units} />
          <Judul />
        </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
