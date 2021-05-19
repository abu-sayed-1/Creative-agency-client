import React from 'react';
import airbnb from "../../../images/images/logos/airbnb.png"
import google from "../../../images/images/logos/google.png"
import netflix from "../../../images/images/logos/netflix.png"
import slack from "../../../images/images/logos/slack.png"
import uber from "../../../images/images/logos/uber.png"
import './CompanyLogo.css'

const CompanyLogos = [{
    id: 1,
    img: airbnb
},
{
    id: 2,
    img: google
},
{
    id: 3,
    img: netflix
},
{
    id: 4,
    img: slack
},
{
    id: 5,
    img: uber
}
];

const CompanyLogo = () => {
    return (
        <div className="container">
            <div className="row w-auto mb-5 py-5 justify-content-center">
                {
                    CompanyLogos.map(logos =>
                        <div style={{ maxHeight: '40px' }} className="p-2 mr-4 ">
                            <div className="col-md-2 ">
                                <img src={logos.img} alt="" width="100px" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CompanyLogo;