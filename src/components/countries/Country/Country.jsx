import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const [Visited,setVisited]=useState(false)
    const handelVisited= ()=>{
        setVisited(!Visited)
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <h4>capital:{country.capital.capital[0]}</h4>
            <p>population: {country.population.population}</p>
            <p>area:{country.area.area} {
                country.area.area >3000000 ? "Big country":"Small country"
            }</p>

            <button onClick={handelVisited} className="">{Visited? "Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;