import React from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderDetail from './OrderDetail';

const Order = () => {
    return (
        <section>
        <div>
     <Header></Header>
    </div>
        <div className="row m-0 p-0 ">
            <div  className="col-md-2  mx-0 px-0">
                 <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mx-0 background_color brand_content">
                  <OrderDetail></OrderDetail>
            </div>
        </div>
    </section>
    );
};

export default Order;