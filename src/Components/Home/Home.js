import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/Frame.png"
import image1 from "../../images/Frame-1.png"
import image2 from "../../images/Frame-2.png"
import image3 from "../../images/Group.png"

const Home = () => {
    return (
        <div className="container vehicles">

            <div className="vehicle">
                <div className="bike">
                    <img src={image} alt="" />
                    <Link to="/destination">BIKE</Link>
                </div>

                <div className="car">
                    <img src={image1} alt="" />
                    <Link to="/destination">CAR</Link>
                </div>

                <div className="bus">
                    <img src={image2} alt="" />
                    <Link to="/destination">BUS</Link>
                </div>

                <div className="train">
                    <img src={image3} alt="" />
                    <Link to="/destination">Train</Link>
                </div>
            </div>


        </div>
    );
};

export default Home;