import React from 'react';

const AboutPlanet = ({ state, planet }) => {
 /*   if (!state) {
        return (
            <div className={"spinner-border text-primary"}></div>
        );
    } */
    
    return (
            <div className='col-8'>
                <p><span>Name: {planet.name}</span></p>
                <p><span>Population: {planet.population}</span></p>
                <p><span>Climate: {planet.climate}</span></p>
                <p><span>Terrain: {planet.terrain}</span></p>
                <p><span>Gravity: {planet.gravity}</span></p>
                <p><span>Rotation period: {planet.rotation_period}</span></p>
                <p><span>Orbital period: {planet.orbital_period}</span></p>
            </div>        
        );
    
};

export default AboutPlanet;
