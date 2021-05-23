import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllServiceListsDetail from './AllServiceListsDetail';

const AllServiceLists = () => {
    const [customerData, setCustomerData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allCustomerData')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCustomerData(data)
                }
                else {
                    console.log("data loading now ....")
                }
            })
    }, []);

    return (
        <section>
            <Header />
            <div style={{ height: '100%' }} className="row m-0 p-0 container-fluid">
                <div className="col-md-2 mx-0 px-0">
                    <Sidebar />
                </div>
                <div className="col-md-10 mx-0 p-3 background_color brand_content">
                    <AllServiceListsDetail customerData={customerData} />
                </div>
            </div>
        </section>
    );
};

export default AllServiceLists;