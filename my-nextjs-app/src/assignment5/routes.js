import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

    if (selectedAirline) {
        console.log(selectedAirline)
        const selectedRoutes = routes.filter(d => d.AirlineID === selectedAirline);
        return (
            <g>
                {selectedRoutes.map((d, i) => {
                    const source = projection([d.SourceLongitude, d.SourceLatitude]);
                    const target = projection([d.DestLongitude, d.DestLatitude]);
                    return (
                        <line
                            key={i}
                            x1={source[0]}
                            y1={source[1]}
                            x2={target[0]}
                            y2={target[1]}
                            stroke="#992a5b"
                            strokeWidth={0.1}
                        />
                    );
                })}
            </g>
        );
    }
    else{
    return <g></g>
    }
}

export { Routes }