import React from 'react'

const ResidentInfo = ({ resName, resImg, resStatus, resOrigin, resEpisodes }) => {
    return (
        <div>
            <h3>{resName}</h3>
            <img src={resImg} alt='Imagen of character' />
            <p>{ resStatus }</p>
            <p>Origin: { resOrigin }</p>
            <p>Episodes: { resEpisodes }</p>
        </div>
    )
}

export default ResidentInfo