import React, { useEffect, useState } from 'react'
import SingleData from './SingleData';

export default function SampleData() {

    const [planets, setPlanet] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/planet')
            .then(res => res.json())
            .then(data => setPlanet(data));
    }, []);


    return (
        <div className='ml-2 mr-2 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    planets.map(planet => <SingleData
                        key={planet._id}
                        planet={planet}
                    ></SingleData>)
                }
            </div>
        </div>
    )
}

