import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/Frame.png"
import image1 from "../../images/Frame-1.png"
import image2 from "../../images/Frame-2.png"
import image3 from "../../images/Group.png"

const Home = () => {
    return (
        <div>
        
        <div className="vehicle">
                <div className="bike">
                    <img src={image} alt="" />
                    <Link to="/bike">BIKE</Link>
                </div>

                <div className="car">
                    <img src={image1} alt="" />
                    <Link to="/car">CAR</Link>
                </div>

                <div className="bus">
                    <img src={image2} alt="" />
                    <Link to="/bus">BUS</Link>
                </div>

                <div className="train">
                    <img src={image3} alt="" />
                    <Link to="/train">Train</Link>
                </div>
            </div>

            
        </div>
    );
};

export default Home;