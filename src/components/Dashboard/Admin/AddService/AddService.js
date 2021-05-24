import React from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch('https://creative-agency-fdt69.herokuapp.com/addServices', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res) {
          alert('add Service successfully');
        };
      });
  };
  return (
    <section>
      <Header currentName="Add-Service"/>
      <div className="row m-0 p-0 ">
        <div className="col-md-2 mx-0 px-0">
          <Sidebar />
        </div>
        <div className="background_color brand_content col-md-10">
          <div style={{ borderRadius: '20px', backgroundColor: 'white' }} className="row
           mx-0 p-3 mt-3 m-md-5 mr-0">
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6>Service Title</h6>
                <div className="form-group">
                  <input type="text" name="serviceTitle" ref={register({ required: true, minLength: 5 })} className="form-control p-4" placeholder="Enter title" />
                  {errors.serviceTitle && <span className="text-danger">title is required and minimum Five character ^</span>}
                </div>
                <h6>Description</h6>
                <div className="form-group">
                  <textarea name="description" ref={register({ required: true, minLength: 10 })} className="form-control" id=""
                    cols="20" rows="5" placeholder="Enter Designation">
                  </textarea>
                  {errors.description && <span className="text-danger">Designation is required and minimum Ten character ^</span>}
                </div>
                <button style={{ float: 'right', marginRight: '4rem' }}
                  type="submit" className="admin_btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;