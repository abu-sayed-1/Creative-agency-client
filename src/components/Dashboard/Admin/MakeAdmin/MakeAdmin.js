import React from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import "./MakeAdmin.css"
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch('https://creative-agency-fdt69.herokuapp.com/makeAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res) {
          alert('Make Admin done')
        }
      });
  };
  return (
    <section onSubmit={handleSubmit(onSubmit)}>
      <Header currentName="Make-Admin" />
      <div className="row container-fluid">
        <div className="col-md-2 mx-0 px-0">
          <Sidebar />
        </div>
        <div className="background_color brand_content col-md-10 mx-0 p-2">
          <div className=" make_container p-md-5 p-2 pt-5 mt-3 mr-md-5 ml-md-2">
            <form className="my-1 row" action="">
              <div className="form-group col-md-6">
                <h6>Email</h6>
                <input type="text" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} name="email" className="form-control p-2" placeholder="Your email address" />
                {errors.email && <span className="text-danger">Email is required/example@gmil.com^</span>}
              </div>
              <div className="col-md-4 mt-4">
                <button type="submit" className="admin_btn"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;