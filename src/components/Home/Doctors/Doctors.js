import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import image3 from '../../../images/MG_9202-002WW.jpg'
import './Doctors.css';
const Doctors = () => {
    const [doctors,setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                console.log(data);
            });
    }, [])

    return (
        <div className="row">
            <div class="col-lg-5 mt-5">
                <img src={image3} alt="" />
            </div>
            <div className="col-lg-7">
            <div id="doctors">
            <h2 className="text-primary  my-5 fw-bold fs-1">Meet Our Doctors</h2>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
                
            </div>
        </div>
            </div>
        </div>
    );
};

export default Doctors;