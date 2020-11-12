import React from 'react';
import "./Service.css";
import { NavLink } from 'react-router-dom';


const Service = (props) => {
    const { serviceTitle, description, img, background } = props.service;
    return (

            <div className={` service_container  col-lg-4 col-md-6 col-sm-12  text-center  p-4 my-3  service_${background}`}>
            <NavLink style={{outline:'none'}} to="/order">
                <img style={{ height: '50px' }} src={img} alt="" />
                <h5 className="my-3">{serviceTitle}</h5>
                <p className="text-secondary mx-3 text-break">{description}</p>
                </NavLink>
            </div>
    );
};

export default Service;