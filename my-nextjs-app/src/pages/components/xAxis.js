//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




// function XAxis(props){
//     const { xScale, height, width, axisLable } = props;
//     //Note:
//     //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
//     //2. you can use typeof(xScale.domain()[0]) to decide the return value
//     //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
    
//     if(xScale) {
//         return <g>
//         {/* //the if(xScale){...} means when xScale is not null, the component will return the x-axis; otherwise, it returns <g></g>
//         //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
//         //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
//         </g>
//     }else {
//     return <g></g>
// }
// }


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;
    const axisRef = useRef();

    useEffect(() => {
        if (xScale) {
            // Check the type of the first element in the domain
            const isNumeric = typeof xScale.domain()[0] === 'number';
            const axis = d3.axisBottom(xScale);

            // Log the domain and type
            console.log('Domain:', xScale.domain());
            console.log('Is Numeric:', isNumeric);

            // Create the axis and apply formatting if necessary
            d3.select(axisRef.current).call(axis);

            // Handle rotation for string labels
            if (!isNumeric) {
                d3.select(axisRef.current)
                    .selectAll("g.tick text")
                    .attr("transform", "rotate(90)")  // Rotate text labels
                    .style("text-anchor", "start")    // Align text anchor
                    .attr("dx", "1em")                // Adjust horizontal position
                    .attr("dy", "-0.5em");              // Adjust position
            }
        }
    }, [xScale]);

    return (
        <g ref={axisRef} transform={`translate(0, ${height})`}>
            <text
                transform={`translate(${width / 2}, -20)`}
                textAnchor="middle"
                fill="black"
                fontSize="15"

            >
                {axisLabel}
            </text>
        </g>
    );
}

export default XAxis;
