import React from 'react'
import '../styles/styles.css'
const ResidentInfo = ({ resName, resImg, resStatus, resOrigin, resEpisodes }) => {
    return (
        <div className='card cards' >
            <img src={resImg} className="card-img-top" alt='Imagen of character' />
            <div className='card-body'>

            <h3>{resName}</h3>
            <p>{ resStatus }</p>
            <p>Origin: { resOrigin }</p>
            <p>Episodes: { resEpisodes }</p>
            </div>
        </div>
    )
}

export default ResidentInfo