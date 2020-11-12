import React from 'react';

const ServiceListDetail = (props) => {
    const {price, profession, projectDetails,userName} = props.customerData;
    return (
            <div className="card col-md-5 border-0 m-3 p-4" style={{borderRadius:'12px' }}>
                <div className="d-flex">
                    <div> 
                     <h6>{userName}</h6>
                     </div> 
                     {/* <div className="ml-5 pl-5">
                       .....
                    </div>   */}
                </div>
              <div className="card-body p-1">
                  <h4>{profession}</h4>
                  <h4>${price}</h4>
                 <p style={{fontSize:'18px', color: "darkgray"}}  className="text-break">{projectDetails}</p>
              </div>
          </div>  
     );
};

export default ServiceListDetail;