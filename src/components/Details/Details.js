import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Details = () => {
    const {serviceId} = useParams();
    const [details,setDetails] = useState([]);
    const [serviceDetail,setServiceDetail] = useState({});
   
    useEffect(() => {
        fetch("/serviceDetail.json")
          .then((res) => res.json())
          .then((data) => setDetails(data.service));
      }, []);
      useEffect(() =>{
         const foundService= details.find(service =>service.id==serviceId)
         setServiceDetail(foundService);
         
      },[details])
      console.log(serviceDetail);

    return (
        <div className="doctor-details container">
            <div className="">
              <img className="my-card-img" src={serviceDetail?.img} alt="" />
              <h3 className="pt-5 text-primary">{serviceDetail?.name}</h3>
              <p className="px-3">{serviceDetail?.description}</p>
            </div>
        </div>
    );
};

export default Details;