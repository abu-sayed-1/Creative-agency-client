import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const allServices = [{
    id: 1,
    img: 'https://i.ibb.co/HphGd87/service1.png',
    serviceTitle: 'Web & Mobile design',
    description: 'We craft stunning and amazing web UI, using a will drrafted UX to fit your product'
},
{
    id: 2,
    img: 'https://i.ibb.co/Rys5jCD/service2.png',
    serviceTitle: ' Graphic design',
    background: 'content',
    description: 'amazing flyers, social media post and brand representations that would make your band stand out'
}, {
    id: 3,
    img: 'https://i.ibb.co/bWHptj0/service3.png',
    serviceTitle: 'Web  development',
    description: 'With well writien codes, we build amazing apps for all platforms, mobile and web apps in general'
},]


const Services = () => {
     const [allServicesData, setAllServicesData] = useState([]);
   const handleService = () => {
    const serviceDatas = allServices;
    fetch('https://lit-hollows-73598.herokuapp.com/addServices',{
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(serviceDatas)
    })
   };

   useEffect(() => {
        fetch('https://lit-hollows-73598.herokuapp.com/ServicesByData')
            .then(res => res.json())
            .then(data => setAllServicesData(data))
   
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