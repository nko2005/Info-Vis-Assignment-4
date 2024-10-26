


// function YAxis(props){
//     const { yScale, height, axisLable } = props;
//     if(yScale){
//         return <g>
            
//         {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
//         //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//         //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
   
//             <text style={{ textAnchor:'end', fontSize:'15px'}} transform={`translate(20, 0)rotate(-90)`}>
//                 {axisLable}
//             </text>
//         </g>
//     } else {
//         return <g></g>
//     }

// }

// export default YAxis

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function YAxis(props) {
    const { yScale, height, axisLabel } = props;
    const axisRef = useRef();

    useEffect(() => {
        if (yScale) {
           
           const axis = d3.axisLeft(yScale)
                

            d3.select(axisRef.current).call(axis);
        }
    }, [yScale]);

    if (yScale) {
        return (
            <g ref={axisRef}>
                <text
                    transform={`translate(10, ${height / 2 -10})rotate(-90)`}
                    textAnchor="middle"
                    fill="black"
                    fontSize="15"
                    dy="10"
                >
                    {axisLabel}
                </text>
            </g>
        );   } else {
        return <g></g>;
    }
}

export default YAxis;