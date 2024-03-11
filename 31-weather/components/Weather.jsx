
const Weather = ({weather}) => {
    return (
        <div className={'infoWeath'}>
            <p>Location: IL, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>


        </div>
    );
};

export default Weather;