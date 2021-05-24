import React from 'react';
import { useForm } from "react-hook-form";

const OrderDetail = () => {
    const { register, handleSubmit, errors } = useForm();
    const getEmail = JSON.parse(sessionStorage.getItem("userInfo"));
    const onSubmit = (data) => {
        const orderData = {
            name: data.name,
            price: data.price,
            profession: data.profession,
            projectDetails: data.projectDetails,
            userName: data.userName,
            email: getEmail.email
        }
        fetch('https://creative-agency-fdt69.herokuapp.com/customerOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => {
                if (res) {
                    alert('Order successful')
                }
            });
    };

    return (
        <div className="mx-auto col-md-7 p-0 mt-5 pt-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true, minLength: 5 })} name="userName" className="form-control p-4" placeholder="Your name / company's name" />
                    {errors.userName && <span className="text-danger">Your name/company's name is required and minimum Five character ^</span>}
                </div>

                <div className="form-group">
                    <input type="text" value={getEmail.email} ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} name="email" className="form-control p-4" placeholder="Your email address" />
                    {errors.email && <span className="text-danger">Email is required/YourName@gmil.com ^</span>}
                </div>

                <div className="form-group">
                    <input type="text" ref={register({ required: true, minLength: 5 })} name="profession" className="form-control p-4" placeholder="Graphic Design" />
                    {errors.profession && <span className="text-danger">This field is required and minimum Five character ^</span>}
                </div>

                <div className="form-group">
                    <textarea name="projectDetails" ref={register({ required: true, minLength: 50 })} className="form-control p-4" id="" cols="20" rows="5" placeholder="Project Details"></textarea>
                    {errors.projectDetails && <span className="text-danger">Project Details is required and minimum Fifteen character ^</span>}
                </div>

                <div className="form-group">
                    <input type="number" name="price" ref={register({ min: 10, required: true })} className="form-control p-4" placeholder="Price" />
                    {errors.price && <span className="text-danger">Price is required and minimum two length ^</span>}
                </div>

                <div className="form-group text-left">
                    <button type="submit" className="btn_brand"> Send </button>
                </div>
            </form>
        </div>
    );
};

export default OrderDetail;