import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img } = service;
    return (
        <div className="service my-card">
            <div className="img-wrapper">
                <img src={img} alt="" height="304" className="my-card-img" />
            </div>
            <div className="card-body-wrapper">
                <div className="card-txt">
                    <h3>{name}</h3>
                    <p className="">{description}</p>
                </div>
                <div className="details-btn">
                    <Link to={`/detail/${id}`}>
                        <button className="my-btn">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;