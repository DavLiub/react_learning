import {useState} from 'react';
import Form from "./Form.jsx"
import Weather from "./Weather.jsx"
import {base_url, API_key} from "../utils/constants.jsx";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeather = async (city, units) => {
        const url4GetWeatherByCity = `${base_url}?q=${city}&appid=${API_key}&units=${units}`;
        console.log(`Request current weather:\n${url4GetWeatherByCity}`);
        try {
            const response = await fetch(url4GetWeatherByCity)
            const data = await response.json();
            console.log(data);
            setWeatherInfo({
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure
            })
            console.log(`Response current weather:`);
            console.log(weatherInfo);
        } catch (e) {
            console.log(e.text);

        }
    }

    return (
        <div>
            <div className={'row-space'}></div>
            <Form getWeather={getWeather}/>
            <div className={'row-space'}></div>
            <Weather weather={weatherInfo}/>
        </div>
    );
};

export default Data;