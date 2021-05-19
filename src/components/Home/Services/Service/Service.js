import React from 'react';
import "./Service.css";
import { useHistory } from 'react-router-dom';

const Service = (props) => {
    const {
        serviceTitle,
        description,
        img,
        background
    } = props.service;
    const history = useHistory();
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-center p-5 my-3">
            <div
                onClick={() => history.push("/order")}
                 className={`service_${background} py-4 cursor_pinter`}>
                 <img style={{ height: '50px' }} src={img} alt="" />
                 <h5 className="my-3">{serviceTitle}</h5>
                <p className="text-secondary mx-3 text-break">{description}</p>
            </div>
        </div>

    );
};

export default Service;