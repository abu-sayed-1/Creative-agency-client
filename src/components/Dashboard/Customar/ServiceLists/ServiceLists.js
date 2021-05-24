import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ServiceListDetail from './ServiceListDetail';

const ServiceLists = () => {
    const [CustomersByData, setCustomersByData] = useState([]);
    const getEmail = JSON.parse(sessionStorage.getItem("userInfo"));
    useEffect(() => {
        fetch('https://creative-agency-fdt69.herokuapp.com/CustomersByData?email=' + getEmail.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setCustomersByData(data));
    }, [])

    return (
        <section>
            <Header currentName="service-Lists"/>
            <div className="row m-0 p-0">
                <div className="col-md-2  mx-0 px-0">
                    <Sidebar />
                </div>
                <div className="col-md-10 m-0 p-0 row background_color brand_content " >
                    {
                        CustomersByData.map(customerData => <ServiceListDetail key={customerData._id} customerData={customerData} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceLists;