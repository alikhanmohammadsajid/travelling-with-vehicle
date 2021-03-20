import React, { useEffect, useState } from 'react';
import vehicles from "../../fakeData/data.json"



const Destination = () => {

    const [vehicle, setVehicle] = useState([])

useEffect(() => {
    setVehicle(vehicles)
    console.log(vehicles);
}, [])

    return (
        <div style={{textAlign:"center"}}>
            <h1>Pick From</h1>
           <input type="text" placeholder="from"/>

        <h1>Pick To</h1>
        <input type="text" placeholder="to"/>
        <br/>
        <br/>
        <button>search</button>
            
        </div>
    );
};

export default Destination;