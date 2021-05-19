import React from 'react';

const ContactInfo = () => {
    return (
        <div className="mx-auto">
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your email address" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your name / company's name" />
                </div>
                <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                </div>
                <div className="form-group text-left">
                    <button type="button" className="btn_brand"> Send </button>
                </div>
            </form>

        </div>
    );
};

export default ContactInfo;