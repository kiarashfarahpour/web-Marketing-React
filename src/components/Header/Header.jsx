import React from "react";
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { FaPaperPlane  } from 'react-icons/fa';
const Heder = () =>{
    return(
        <header className="header flex flex-center flex-colum">
            <Navbar/>
            <div className="container">
                <div className="header-center text-center flex flex-colum">
                    <h1 className="text-upercase header-title">Marketin solution agency</h1>
                    <p className="text-leade">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, iure alias, autem neque nam error possimus doloremque sunt perferendis porro numquam, natus minima est dolor ullam maxime accusamus perspiciatis ut.</p>
                    <a href="/" className="btn header-btn btn-blue">
                        <FaPaperPlane/><span>get started</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Heder