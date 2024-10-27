
// function Points(props) {
//     const {data, xScale, yScale, height, width} = props;
//     //Note: 
//     //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
//     //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//     if(data){
//         return <g>
//         {/* task:1. remove this comments and put your code here */}

//         </g>
//     } else {
//         return <g></g>
//     }
// }

// export default Points


// function Points(props) {
//     const { data, xScale, yScale, height, width } = props;

//     if (data) {
//         return (
//             <g>
//                 {data.map((d, i) => (
//                     <circle
//                         key={i}
//                         cx={xScale(d.tripdurationS)}
//                         cy={yScale(d.tripdurationE)}
//                         r={5} 
//                         fill="steelblue" 
//                     />
//                 ))}
//             </g>
//         );
//     } else {
//         return <g></g>;
//     }
// }

// export default Points;


import React, { useState } from 'react';

function Points(props) {
const { data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX,
    setTooltipY, setTooltipVisible, setTooltipContent } = props;



const handleMouseEnter = (d) => {
    setSelectedStation(d.station);
    setTooltipX(event.pageX);
    setTooltipY(event.pageY);
    
     const station = d.station;
     const tripdurationS = d.tripdurationS;
     const tripdurationE = d.tripdurationE;

  

    setTooltipContent({station: station, tripdurationS: tripdurationS, tripdurationE: tripdurationE});
    setTooltipVisible(true);
};

const handleMouseOut = () => {
    setSelectedStation(null);
    setTooltipVisible(false);
   
};

const getColor = (selectedStation, station) => {
    return station === selectedStation ? 'red' : 'steelblue';
};

const getRadius = (selectedStation, station) => {
    return station === selectedStation ? 10 : 5;
};

if (data) {
    return (
        <g>
            {selectedStation && (
                <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="yellow"
                    opacity={0.5}
                />
            )}
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(selectedStation, d.station)}
                    fill={getColor(selectedStation, d.station)}
                    onMouseEnter={() => handleMouseEnter(d)}
                    onMouseOut={handleMouseOut}
                />
            ))}
           
        </g>
    );
} else {
    return <g></g>;
}
}

export default Points;