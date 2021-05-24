import React from 'react';
import Header from '../../Shared/Header/Header';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Feedback = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://creative-agency-fdt69.herokuapp.com/addFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    alert('Thank You For Your Feedback')
                };
          });
    };
    return (
        <section>
            <Header currentName="Review"/>
            <div className="row container-fluid">
                <div className="col-md-2 p-0">
                    <Sidebar />
                </div>
                <div className="background_color brand_content mx-auto col-md-10 p-md-5 pt-5">
                    <div>
                        <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true, minLength: 3 })} name="name" className="form-control p-4" placeholder="Your Name" />
                                {errors.name && <span className="text-danger">Your name is required and minimum Three character ^</span>}
                            </div>
                            <div className="form-group ">
                                <input type="text" ref={register({ required: true, minLength: 6 })} name="Designation" className="form-control p-4 border-0" placeholder="Company's name, Designation" />
                                {errors.Designation && <span className="text-danger">Company's name,Designation is required and minimum six character ^</span>}
                            </div>
                            <div className="form-group">
                                <textarea ref={register({ required: true, minLength: 10 })} name="quote" className="form-control  border-0 p-4" id="" cols="10" rows="5" placeholder="Description"></textarea>
                                {errors.quote && <span className="text-danger">Description is required and minimum Ten character ^</span>}
                            </div>
                            <div className="form-group text-left">
                                <button type="submit" className="btn_brand"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;