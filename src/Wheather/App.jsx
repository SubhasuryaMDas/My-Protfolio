import React, {  useState } from "react";
import axios from "axios";

const ApiKey = "2f27e87d2c61b5c64e553ceba6944ff1";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  

  async function getWeather() {
    if(!city) return;
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
    );

    setData(result.data.list);
    
  }
  
  return(
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get</button>

      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <p>City: {item.name}</p>
              <p>Temperature: {item.main.temp}°C</p>
              <p>Weather: {item.weather[0].description}</p>
            </div>
          ))
        ) : (
          <p>No weather data yet</p>
        )}
      </div>
    </>
  );
};

export default App;
