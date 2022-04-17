import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import '../styles/styles.css'
const ResidentContainer = ({ residents }) => {

    const [residentsData, setResidentsData] = useState([])

    useEffect(() => {
        residents.map( (url) => {
            return axios.get(url) 
            .then( ({data}) => setResidentsData((prevState) => [...prevState, data]));
           
            
        });
        return () => {setResidentsData([])}
    }, [residents])

    console.log(residentsData);

    return (
        <div className='flex'>
            {residentsData &&
                residentsData.map( ({ id, name, image, status, origin, episode }) =>
                   
                <ResidentInfo
                        key={ id }
                        resName={ name }
                        resImg={ image }
                        resStatus={ status }
                        resOrigin={ origin.name }
                        resEpisodes={ episode.length }
                    />
                )
            }
        </div>
    )
}

export default ResidentContainer;
