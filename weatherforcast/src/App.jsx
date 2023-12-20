import { useState } from "react";

const App = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const api = {
        key : "666f3b533d958160b6462fc0279c3f69",
        base : "https://api.openweathermap.org/data/2.5/weather"
    }

    function handleSearch() {
        fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(d=>setWeather(d))
        
    }

    function location() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
        .then(res=>res.json())
        .then(d=>setWeather(d))    
    }

    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        lat=position.coords.latitude;
        lon=position.coords.longitude;

    }
    
    function error() {
      console.log('Error getting user position');
    }
    

    return(
        <section class="main">
            <div>
            <input className="int" type="search" placeholder="Enter your City" onChange={(e)=>setSearch(e.target.value)} />
            <button className="btn1"onClick={handleSearch}>Search</button>
            <button className="btn2"onClick={location}>Current Location</button>
            <div>
                { (typeof weather.main !== 'undefined')? (
                        <div>
                            <p>City:- {weather.name}</p>
                            <p>Temp:- {weather.main.temp}</p>
                            <p>Weather:- {weather.weather[0].main}</p>
                            <p>Description:- {weather.weather[0].description}</p>
                        </div>
                    ) : ("Not Fount❌")
                }
            </div> 
            </div>
            </section>
    )
}
export default App




