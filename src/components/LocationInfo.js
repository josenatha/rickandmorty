import React from 'react';
import '../styles/styles.css'
const LocationInfo = ({ locName, locType, locDimension, locPupulation }) => {
    return (
        <>
            <h2 className='center'>{locName}</h2>
            <div className='bg worco'>
                <p>Type: { locType } </p>
                <p>Dimension: { locDimension } </p>
                <p>Population: { locPupulation } </p>
            </div>
        </>
    )
}

export default LocationInfo;
