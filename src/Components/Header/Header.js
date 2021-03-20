import React from 'react';
import { Link } from 'react-router-dom';
import header from "../../images/Bg.png"
import "./Header.css"




const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav container">
                <ul>
                    <li>
                        <b>Travelling with vehicle</b>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-destination" to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>

                    </li>
                </ul>
            </nav>


        </div>
    );
};

export default Header;