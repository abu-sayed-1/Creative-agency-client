import React from 'react';
const ReviewInfo = (props) => {
const {quote,work,name,img,Designation} = props.feedback;
    return (
      <div style={{minHeight:'212px'}} className="card col-lg-4 col-md-6 col-sm-12">
         <div className="card-header d-flex p-1 align-items-center ">
            <img className="mx-3 img-fluid" src={img} alt="" width="60" />
              <div>
                 <h6 className="text-primary">{name}</h6>
                   <p className="">{work}</p>
                </div>
           </div>
          <div className="p-1">
             <h6>{Designation}</h6>
                <p>{quote}</p>
           </div>      
      </div>

    );
};

export default ReviewInfo;