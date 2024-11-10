import React from "react";
import { geoPath, geoMercator } from "d3-geo";
import { Routes } from './routes'
import { count } from "d3";



function AirportMap(props){
    const {width, height, countries, airports, routes, selectedAirline} = props;
    //TODO: 
    // 1.Define a projection which is geoMercator; 
    // set .scale(97), and .translate([width/2, height/2+20]); 
    // 2. Define a path generator using geoPath();
    // 3. Plot the world map; remember to use countries.features.map(); (Note: stroke is "#ccc", and color is "#eee");
    // 4. Plot the airports; remember to use routes.map(); (Note: radius is 1; color is "#2a5599"); 

    let projection = geoMercator().scale(97).translate([width/2, height/2+20]);//TODO: define a projection of Mercator.
    let pathGenerator = geoPath().projection(projection);

    const countryPaths = countries.features.map((d, i) => {
        return <path key={i} d={pathGenerator(d)} stroke="#ccc" fill="#eee"/>
    });
   
    const airportCircles = airports.map((d, i) => {
        return <circle key={i} cx={projection([d.Longitude, d.Latitude])[0]} cy={projection([d.Longitude, d.Latitude])[1]} r={1} fill="#2a5599"/>
    });

    return <g>
        {countryPaths}
        {airportCircles}
        <Routes projection={projection} routes={routes} selectedAirline={selectedAirline}/>
    </g>
}

export { AirportMap }