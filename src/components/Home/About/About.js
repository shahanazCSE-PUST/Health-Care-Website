import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/1-20190325125709.jpg';
import image2 from '../../../images/aboutus01.jpg';
import './About.css'

const About = () => {
    return (
        <div id="about" className="mb-5">
            <h2 className="text-primary fw-bold fs-1 my-5">About Us</h2>
            <div className="row">
                <div className="col-md-5 img-wrap">
                    <img src={image} alt="" />
                </div>
                <div className="col-md-7">
                    <h3 className="text-primary mt-5">Who We Are</h3>
                    <p className="text-start">Delta Health Care Center An Enterprise of Diabetic Association of Bangladesh,having its Head Office at Commercial Plot No: 27-28, Main Road-1, Section: 6, Mirpur, Dhaka-1216 was established in June 1996 as a new project of the BADAS with the primary objective of providing quality diagnostic services throughout the country at a reasonable cost. <br />
                        Subsequently, health-care component was incorporated to make it cost-effective and more comprehensive. At present NHN is one of the largest Healthcare network of the Diabetic Association of Bangladesh. <br />
                        Currently, NHN with its 07 hospitals, 23 Medical Centers provides quality Medicare services to the doorsteps of people. A nursing institute called NHN Nursing Institute provides quality nurses to serve quality medical services.</p>
                        <Link to='/aboutDetails'>
                <button className="btn btn-warning">Learn More</button>
            </Link>
                </div>

            </div>

            <div className="row mt-5">
                <div className="col-md-7">
                    <h3 className="text-primary mt-5">Our Mission</h3>
                    <p>Praava exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</p>
                    <p>We believe that everyone should have access to convenient, affordable, and high-quality care.
                        We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
                        Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.</p>
                        <Link to='/aboutDetails'>
                <button className="btn btn-warning">Learn More</button>
            </Link>
                </div>
                <div className="col-md-5 img-wrap">
                    <img src={image2} alt="" />
                </div>
            </div>


        </div>
    );
};

export default About;