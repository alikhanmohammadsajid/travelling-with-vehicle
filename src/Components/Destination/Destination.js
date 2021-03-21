import React, { useEffect, useState } from 'react';
import vehicles from "../../fakeData/data.json"

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


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
            <LoadScript
      googleMapsApiKey="AIzaSyCkKY4LWCwJHixJsLPW-1b8i3dBGfFzZzw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>
            </div>
        </div>
    );
};

export default React.memo(Destination)