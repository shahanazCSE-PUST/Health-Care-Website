import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    // const {service} = props;
    const { id, name, skills, degree, img } = doctor;
    return (
        <div className="doctor pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{degree}</p>
            <p className="px-3">{skills}</p>
            <Link to={`/doctorDetail/${id}`}>
                <button className="btn btn-warning px-5">See Details</button>
            </Link>
        </div>
    );
};

export default Doctor;