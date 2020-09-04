import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank You");
      }
    return (
        <>
            <div className="footer align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <h4>Links</h4>
                            <NavLink className="footer-links" to='/'>Home</NavLink><br />
                            <NavLink className="footer-links" to='/menu'>Menu</NavLink><br />
                            <NavLink className="footer-links" to='/about'>About</NavLink><br />
                            <NavLink className="footer-links" to='/contact'>Contact</NavLink>
                        </div>
                        <div className="col-12 col-md-8 text-center subs">
                            <h4><strong>HEALTH & FOOD</strong></h4>
                            <h5>Get News & Offers</h5>
                            <form className="form-inline my-2 my-lg-0 offset-md-3" onSubmit={handleSubmit}>
                                <input className="form-control mr-sm-2" type="Subscribe" placeholder="Subscribe" aria-label="Subscribe" />
                                <button className="btn btn-outline-warning my-2 my-sm-0" type="Subscribe">Subscribe</button>
                            </form><br />
                            <p>Ready To Serve You</p>
                            
                            <NavLink 
                                className="footer-social-links" to="/" exact> 
                                <FaInstagram color="black" />
                            </NavLink>
                            <NavLink 
                                className="footer-social-links" to="/" exact> 
                                <FaGoogle color="black" />
                            </NavLink>
                            <NavLink 
                                className="footer-social-links" to="/" exact> 
                                <FaFacebookF color="black" />
                            </NavLink>
                        </div>
                        <div className="col-12 col-md-2 contact">
                            <h4>Contact</h4>
                            <p className="footer-contact">DHA Phase 2 Karachi Pakistan<br /> +92-321-3048567<br /> foodcircles@info.com </p>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className=" align-items-center text-center w-100">
                            <p> Copyright © 2020 FoodCircles - All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;