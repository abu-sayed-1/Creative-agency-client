import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AllServiceListsDetail from './AllServiceListsDetail';

const AllServiceLists = () => {
    const [customerData, setCustomerData] = useState([]);
    console.log(customerData)
    useEffect(() => {
        fetch('https://lit-hollows-73598.herokuapp.com/allCustomerData')
             .then(res => res.json())
             .then(data => setCustomerData(data))
    }, []);
        
     return (
        <section  className="container-fluid">
        <div>
     <Header></Header>
    </div>
        <div style={{  height: '100%', }}className="row m-0 p-0 ">
            <div  className="col-md-2  mx-0 px-0">
                 <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mx-0 p-3 background_color brand_content">
                 <AllServiceListsDetail customerData={customerData}></AllServiceListsDetail>
            </div>
        </div>
    </section>
    );
};

export default AllServiceLists;