import React, {Component} from 'react';
import {base_url} from "../utils/constants.jsx";
import "../css/contact.module.css";
import AboutPlanet from './AboutPlanet.jsx';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: ['wait...'],
            aboutWorld: {},
            isGetAboutWorld: false
        };
    }

    async fillPlanets(url) {
        const response = await fetch(url);
        const json = await response.json();
        const planets = json.map(item => ({
            id: item.id,
            name: item.name
        }));
        let planetsSorted = [];
        for (let i = 0; i < planets.length; i++) {
            planetsSorted[planets[i].id] = planets[i].name;
        }
        planetsSorted.splice(0, 1);
        this.setState({ planets: planetsSorted });
        localStorage.setItem("planets", JSON.stringify(planetsSorted));
    }
    
    

    async getAboutWorld(planetName) {
        const planet_id = this.state.planets.indexOf(planetName);
        if (planet_id == -1) {
            this.setState({ aboutWorld: "Planet not found" });
            return;
        }
        const response = await fetch(`${base_url}/v1/planets/${planet_id+1}`);
        const data = await response.json();
        this.setState({ aboutWorld: {
            name: data.name,
            population: data.population,
            climate: data.climate,
            terrain: data.terrain,
            gravity: data.gravity,
            rotation_period: data.rotation_period,
            orbital_period: data.orbital_period
        },
        isGetAboutWorld: true
     });
    }

    componentDidMount() {
        const sortedPlanets = JSON.parse(localStorage.getItem("planets"));
        if (sortedPlanets) {
            this.setState({ planets: sortedPlanets });
        } else {
            this.fillPlanets(`${base_url}/v1/planets`);
        }
    }


    componentWillUnmount() {
        console.log("Contact Unmount");
    }

    render() {
        return (
            //TODO create contact.module.css with styles (https://www.w3schools.com/css/css_form.asp)
            <div className='row'>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    const planetName=e.target.planet.value;
                    this.getAboutWorld(planetName);
                    } } className='mb-3 col-4'>
                    <label className='form-label'>First Name:
                        <input type='text' className='form-control' name='firstName'/>
                    </label>
                    <label className='form-label'>Planet
                        <select name='planet' className="form-select" >
                            {this.state.planets.map((planet,index) =>
                                <option value={planet} key={index}>{planet}</option>
                            )}
                        </select>
                    </label>
                    <label className='form-label'>Text
                        <textarea name="text" className='form-control' />
                    </label>
                    <p><button type="submit">Submit</button></p>
                </form>
                <AboutPlanet state={this.state.isGetAboutWorld} planet={this.state.aboutWorld}/>        
            </div>
                
        );
    }
}

export default Contact;