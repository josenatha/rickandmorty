import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';

const LocationContainer = ({ location }) => {
    const [ locationData , setLocationData] = useState()

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${location}`)
            .then(({data}) => setLocationData(data))
    }, [location])

    return (
        <div>
            {locationData &&
            <>
                <LocationInfo
                    locName={ locationData.name }
                    locType={ locationData.type }
                    locDimension={ locationData.dimension }
                    locPupulation={ locationData.residents.length }
                />
                <ResidentContainer residents={ locationData.residents } />
            </>
            }
        </div>
    )
}

export default LocationContainer;