import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";


export function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline} = props;
    // Task 1: TODO
    // 1. find the maximum of the Count attribute in the data
    // 2. define the xScale and yScale
    // 3. return the bars; (Remember to use data.map());
     //Task 3: TODO
    // 1. define an arrow function color; it takes a data item, d, as input. 
    // If d.AirlineID is equal to the selectedAirlineID, it returns "#992a5b"; 
    // otherwiese, it returns "#2a5599".
    // 2. define a function onMouseOver; it takes a data item, d, as input,
    // and sets the selectedAirlineID be the d.AirlineID
    // 3. define a function onMouseOut; it has no argument, and sets the selectedAirlineID be null.
    // 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
    // Note: the function of the onMouseOver properties should be an arrow function 
    // that wraps the onMouseOver you defined since it takes d as input.
    console.log(data);
    const yScale = scaleBand()
        .domain(data.map(d => d.AirlineName))
        .range([0, height])
        .padding(0.2);
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Count)])
        .range([0, width]);
        
    const color = d => d.AirlineID === selectedAirlineID ? "#992a5b" : "#2a5599";

    const onMouseOver = (d) => setSelectedAirline(d.AirlineID);

    const onMouseOut = () => setSelectedAirline(null);

    const Bars = ({ data, xScale, yScale }) => (
        data.map(d => (
            <rect
                key={d.AirlineID}
                x={0}
                y={yScale(d.AirlineName)}
                width={xScale(d.Count)}
                height={yScale.bandwidth()}
                fill={d.AirlineID === selectedAirline ? "#992a5b" : "#2a5599"}
                onMouseOver={() => onMouseOver(d)}
                onMouseOut={onMouseOut}
            />
        ))
    );

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height} selectedAirline={selectedAirline} />
            <YAxis yScale={yScale} height={height} />
            <XAxis xScale={xScale} height={height} width={width} />
        </g>
    );
   
    
    
    
}