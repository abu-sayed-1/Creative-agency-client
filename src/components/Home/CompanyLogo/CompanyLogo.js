import React from 'react';
import airbnb from "../../../images/images/logos/airbnb.png"
import google from "../../../images/images/logos/google.png"
import netflix from "../../../images/images/logos/netflix.png"
import slack from "../../../images/images/logos/slack.png"
import uber from "../../../images/images/logos/uber.png"

const CompanyLogos = [{ img: airbnb }, { img: google }, { img: netflix }, { img: slack }, { img: uber }];

const CompanyLogo = () => {
    return (
        <div className="container">
            <div className="row w-auto mb-5 py-5 justify-content-center">
                {
                    CompanyLogos.map((logos, index) =>
                        <div key={index} style={{ maxHeight: '40px' }}
                            className="p-2 mr-4 ">
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