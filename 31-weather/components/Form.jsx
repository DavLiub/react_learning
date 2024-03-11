import {useState} from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('Rehovot');
    const [units, setUnits] = useState('metric');

    const handleChangeCity = e => {
        setCity(e.target.value);
    }

    const handleChangeUnits = e => {
        setUnits(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        getWeather(city, units); // Pass the city and units to the getWeather function

    }

    return (
        <form onSubmit={handleSubmit}>
            <p><input type={'text'} placeholder={'City'} value={city} onChange={handleChangeCity}/></p>
            <p><label htmlFor={'units'}>Choose units: </label>
            <select className={'units'} id={'units'} onChange={handleChangeUnits}>
                <option value="metric">Metric</option>
                <option value="standard">Standard</option>
                <option value="imperial">Imperial</option>
            </select></p>
            <p><button type={"submit"}>Get weather</button></p>
        </form>
    );
}

export default Form;
