import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import '../styles/styles.css'
const LocationContainer = ({ location }) => {
    const [ locationData , setLocationData] = useState()

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${location}`)
            .then(({data}) => setLocationData(data))
    }, [location])

    return (
        <div className='bgflex'>
            {locationData &&
            <>
                <LocationInfo
                    locName={ locationData.name }
                    locType={ locationData.type }
                    locDimension={ locationData.dimension }
                    locPupulation={ locationData.residents.length }
                />
                <div className='bg color'>

                <ResidentContainer residents={ locationData.residents } />
                </div>
            </>
            }
        </div>
    )
}

export default LocationContainer;