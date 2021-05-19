import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllServiceListsDetail from './AllServiceListsDetail';

const AllServiceLists = () => {
    const [customerData, setCustomerData] = useState([]);
    useEffect(() => {
        fetch('https://lit-hollows-73598.herokuapp.com/allCustomerData')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCustomerData(data)
                }
                else{
                    console.log("data loading now ....")
                }
            })
    }, []);

    return (
        <section className="container-fluid">
            <div>
                <Header />
            </div>
            <div style={{ height: '100%' }} className="row m-0 p-0">
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