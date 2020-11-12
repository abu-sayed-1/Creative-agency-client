import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
const [allServicesData, setAllServicesData] = useState([]);
useEffect(() => {
    fetch('https://lit-hollows-73598.herokuapp.com/ServicesByData')
        .then(res => res.json())
         .then(data => setAllServicesData(data));
    }, [])
  
    return (
        <section  className="container-fluid my-5 py-5">
             <h5 className="text_brand text-center">Provide awesome <span className="text_brand_color">Services</span></h5>
            <div className="d-flex mx-5 px-5 justify-content-center">
                <div className="w-100 row  mx-3">
                    {
                       allServicesData.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;