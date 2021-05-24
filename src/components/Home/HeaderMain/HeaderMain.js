import React from 'react';
import airbnb from '../../../images/images/logos/Frame.png'
const HeaderMain = () => {
    return (
    <main className="header_main container-fluid align-items-center mt-5 pt-3 ">
        <div className="row">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#111430' }}> Let's Grow Your<br />Brand To The <br/>Next Level</h1>
                  <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum aliquam ea, labore dignissimos cumque.</p>
                    <button className="btn_brand"> Hire us</button>
               </div>
             <div className="col-md-6  ">
            <img src={airbnb} alt="" className="img-fluid" />
        </div>
      </div>
  </main>
    );
};

export default HeaderMain;