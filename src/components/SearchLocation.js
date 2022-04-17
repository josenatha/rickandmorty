import React from 'react';

const SearchLocation = ({setLocation}) => {
    const submit = (e) =>{
        e.preventDefault()
        console.log(e.target[0].value)
        setLocation(e.target[0].value)
    }
    return (
        <form onSubmit={submit}>
            <input
            
                id='num'
            />
            <button type='submit' >TouchMe</button>
        </form>
    )
}

export default SearchLocation;
