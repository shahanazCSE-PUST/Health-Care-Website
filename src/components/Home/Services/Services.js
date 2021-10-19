import React, { useEffect, useState } from 'react';
import Details from '../../Details/Details';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            });
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary my-5 fw-bold fs-1">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;