import React from 'react';

const AllServiceListsDetail = ({customerData}) => {
    return (
       <section style={{backgroundColor: 'white', borderRadius: '13px' }}className="p-3 ">
            <div className=" col-lg-12 col-md-12 col-sm-12">
     <table className="table borderless col-lg-12 col-md-6 col-sm-12">
        <thead style={{backgroundColor:'#F5F6FA', borderRadius:'15px'}}>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email ID</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Project Detail</th>
            </tr>
        </thead>
        <tbody>
            {
              customerData.map((customerData) => 
                    
                <tr>
                    <td>{customerData.name}</td>
                    <td>{customerData.email}</td>
                    <td>{customerData.profession}</td>
                    <td className="text-break">{customerData.projectDetails}</td>

                </tr>
                )
            }
        </tbody>
    </table>
        </div>
       </section>
    );
};

export default AllServiceListsDetail;