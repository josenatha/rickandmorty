import React from 'react';

const LocationInfo = ({ locName, locType, locDimension, locPupulation }) => {
    return (
        <>
            <h2>{locName}</h2>
            <div>
                <p>Type: { locType } </p>
                <p>Dimension: { locDimension } </p>
                <p>Population: { locPupulation } </p>
            </div>
        </>
    )
}

export default LocationInfo;
