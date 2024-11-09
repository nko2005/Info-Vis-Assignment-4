

// function Bars(props) {
//     const {data, xScale, yScale, height} = props;

//     //Note: 
//     //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
//     //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//     if(data){
//         return <g>
//             {/* {task:
//                     1. remove this comments and put your code here
//                     2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
                    
//             </g>
//     } else {
//         return <g></g>
//     }
// }

// export default Bars
import React, { useState } from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    // Note: 
    // the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    // we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    

    const handleMouseEnter = (station) => {
    setSelectedStation(station);
    };

    const handleMouseOut = () => {
    setSelectedStation(null);
    };

    const getColor = (selectedStation, station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };
    
    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(selectedStation, d.station)}
                        onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseOut={handleMouseOut}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Bars;