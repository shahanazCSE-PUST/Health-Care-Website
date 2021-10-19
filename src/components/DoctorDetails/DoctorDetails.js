import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DoctorDetails.css'

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [details, setDetails] = useState([]);
  const [doctorDetail, setDoctorDetail] = useState({});

  useEffect(() => {
    fetch("/doctordetails.json")
      .then((res) => res.json())
      .then((data) => setDetails(data.doctor));

  }, []);
  useEffect(() => {
    const foundDoctor = details.find(doctor => doctor.id == doctorId);
    setDoctorDetail(foundDoctor);

  }, [details]);
  console.log(doctorDetail);

  return (
    <div className="doctor-details">
      <div className="doctor pb-3 for-bg">
        <img src={doctorDetail?.img} alt="" />
        <h3>{doctorDetail?.name}</h3>
        <p>{doctorDetail?.degree}</p>
        <p className="px-3">{doctorDetail?.skills}</p>
      </div>
      <div>
        <div>
          <h2 className="text-primary my-2">About</h2>
          <p>{doctorDetail?.about}</p>
        </div>
      </div>
      <button className="mx-auto my-btn">Book Appoinment</button>
    </div>
  );
};

export default DoctorDetails;