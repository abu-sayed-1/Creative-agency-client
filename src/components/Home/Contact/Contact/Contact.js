import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import './Contact.css'
const Contact = () => {
    return (
      <section className="contact_container">
         <div className="container mt-5 pt-5">
           <div className="row ">
             <div className="col-md-6 text-center">
               <h1><span className="mr-5 pr-1">Let us handle your </span> project,professionally.</h1>
                 <p className="mt-3 ">With well Written codes, we build amazing apps for  all <br/> <span className="mr-5 pr-4">platforms mobile and web apps in general</span></p>
             </div>
          <div className="col-md-6">
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