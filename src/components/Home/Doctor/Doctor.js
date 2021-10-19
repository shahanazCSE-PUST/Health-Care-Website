import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    // const {service} = props;
    const { id, name, skills, degree, img } = doctor;
    return (
        <div className="doctor my-card">
            <div className="img-wrapper for-padding-top">
                <img src={img} alt="" />
            </div>
            <div className="card-body-wrapper">
                <div className="card-txt">
                    <h3>{name}</h3>
                    <p>{degree}</p>
                    <p className="">{skills}</p>
                </div>
                <div className="details-btn">
                    <Link to={`/doctorDetail/${id}`}>
                        <button className="my-btn">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;