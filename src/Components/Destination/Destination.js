import React, { useEffect, useState } from 'react';
import vehicles from "../../fakeData/data.json"



const Destination = () => {

    const [vehicle, setVehicle] = useState([])

useEffect(() => {
    setVehicle(vehicles)
    console.log(vehicles);
}, [])

    return (
        <div className="d-flex">
            <div className="col-md-6">
            <h1>Pick From</h1>
           <input type="text" placeholder="from"/>

        <h1>Pick To</h1>
        <input type="text" placeholder="to"/>
        <br/>
        <br/>
        <button className="btn-success">search</button>
            
            </div>
            

            <div  className="col-md-6">
                <h1>google map</h1>
            </div>
        </div>
    );
};

export default Destination;