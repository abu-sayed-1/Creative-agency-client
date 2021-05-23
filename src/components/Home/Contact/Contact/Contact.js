import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import './Contact.css'
const Contact = () => {
  return (
    <section className="contact_container">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div>
              <h1>Let us handle your project, <br /> professionally.</h1>
              <p className="mt-3">With well Written codes, we build amazing apps for all platforms mobile and web apps in general</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <ContactInfo />
          </div>
        </div>
      </div>
      <footer className="text-center mt-5 py-5">
        <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
      </footer>
    </section>
  );
};

export default Contact;