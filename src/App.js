import lake_bg from './assets/lake_bg.jpg';
import coldBg from './assets/cold.jpg';
import hot from './assets/hot.jpg';
import hot2 from './assets/hot2.jpg';


function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${lake_bg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section_input">
            <input type="text" placeholder="Enter the City.." 
            />
            <button>°F</button>
          </div>

          <div className="section section_temperature">
            <di className="icon">
              <h3>Surabaya, ID</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" 
              alt="weatherIcon" />
              <h3>Rainy</h3>
            </di>
            <div className="temperature">
              <h1>49 °C</h1>
            </div>
          </div>

          {/* bottom description */}
        </div>
      </div>
    </div>
  );
}

export default App;
