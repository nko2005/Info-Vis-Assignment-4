import React from 'react';
import Bars from './bars';
import YAxis from './yAxis';
import XAxis from './xAxis';



function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
   
        
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height}/>
        <YAxis yScale={yScale} height={height} axisLabel={"Bikers star from"}/>
        
        <XAxis xScale={xScale} height={height} width={width} axisLabel={"Station"} /> 
        </g>
}

export default BarChart