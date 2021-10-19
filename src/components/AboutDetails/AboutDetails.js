import React from 'react';
import im1 from '../../images/unilever.png';
import im2 from '../../images/robi.png';
import im3 from '../../images/cocacola2.png';
import im4 from '../../images/samsung.png';
import './AboutDetails.css'

const AboutDetails = () => {
    return (
        <div>
            <h2 className="text-primary fw-bold fs-1 my-5">Our Goal</h2>
            <div>
                <ol className="text-start">
                    <li>To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</li>
                    <li>Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</li>
                    <li>To promote Health Education and Medical Services.</li>
                    <li>Day care Centre for follow-up cardiac renal and oncology patients.</li>
                    <li>To build a full fledged specialized (Tertiary) Hospital.</li>
                    <li>Set up Satellite collection Centre.</li>
                </ol>
            </div>
            <div>
                <h2 className="text-primary fw-bold fs-1 my-5">Our Corporate Clients</h2>
                <div className="item mb-5">
                    <img src={im1} alt="" />
                    <img src={im2} alt="" />
                    <img src={im3} alt="" />
                    <img src={im4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;