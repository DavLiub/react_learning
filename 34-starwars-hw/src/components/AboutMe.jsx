import React, {Component} from 'react';
import {base_url} from "../utils/constants.jsx";
import "../css/aboutMe.css"

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const heroStorage = localStorage.getItem("hero");
        const heroImage = 0;
        if(heroStorage){
            //TODO * create check on time (1 day)
             const hero2 = JSON.parse(heroStorage);
            this.setState({hero: hero2});
        }else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        name: data.name,
                        height: data.height,
                        id: data.id,
                        birth_year: data.birth_year,
                        eye_color: data.eye_color,
                        gender: data.gender,
                        mass: data.mass,
                        planet_id: data.homeworld,
                        image: data.image
                    }
                    this.setState({hero});
                    localStorage.setItem("hero", JSON.stringify(hero));
                                        
                })
        }
    }

    render() {
        return (
            <div>
                {(this.state.hero) && <div>
                    <div className="float-start w-25 hero_box">
                        <img src={`${base_url}/${this.state.hero.image}`}/>
                    </div>
                    <div className={"float-end w-40 farGalaxy hero_box"}>
                        <p><span className={"hero_text"}>Name:</span>{this.state.hero.name}</p>
                        <p><span className={"hero_text"}>Id:</span>{this.state.hero.id}</p>
                        <p><span className={"hero_text"}>Height:</span> {this.state.hero.height}</p>
                        <p><span className={"hero_text"}>Birth Year:</span> {this.state.hero.birth_year}</p>
                        <p><span className={"hero_text"}>Eye color:</span> {this.state.hero.eye_color}</p>
                        <p><span className={"hero_text"}>Gender:</span> {this.state.hero.gender}</p>
                        <p><span className={"hero_text"}>Mass:</span> {this.state.hero.mass}</p>
                    </div>
                    
                </div>}
            </div>
        );

    }
}

export default AboutMe;