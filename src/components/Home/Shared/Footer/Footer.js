import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
            <div className="mx-auto text-white py-5 my-footer">
                <div className="my-link text-center">
                    <Link as={HashLink} className="p-3 d-inline-block text-white" to="/home#about">About</Link>
                    <Link as={HashLink} className="p-3 d-inline-block text-white" to="/home#doctors">Doctors</Link>
                    <Link as={HashLink} className="p-3 d-inline-block text-white" to="/#services">Services</Link>
                    <Link className="p-3 d-inline-block text-white" to="/careers">Careers</Link>
                    <Link className="p-3 d-inline-block text-white" to="/help">Help</Link>
                    <Link className="p-3 d-inline-block text-white" to="/policy">Privacy Policy</Link>
                </div>
                <div class="iconbar my-2">
                        <i class="fab fa-facebook-f rounded-circle fs-3"></i>
                        <i class="fab fa-twitter rounded-circle fs-3"></i>
                        <i class="fab fa-linkedin-in rounded-circle fs-3"></i>
                        <i class="fab fa-google-plus-g rounded-circle fs-3"></i>
                    </div>
        
                <p className ="text-center">&reg; 2021 All rights reserved</p>
            </div>
    );
};

export default Footer;