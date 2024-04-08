import React, { useState } from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        logIn(data.email, data.password)
        .then(result => {
            console.log(result.user);
            navigate('/');
            toast.success('You have logged in Successfully')
        })
        .catch(error => {
            console.log(error);
            setError("");
            toast.error('Incorrect Email or Password')
        })
      }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
       
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                 className="input input-bordered"   />
                 {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                type="password" 
                placeholder="password" 
                {...register("password", { required: true })}
                className="input input-bordered"
                  />
                   {errors.password && <span className="text-red-500">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {/* {error && <span className="text-red-500">{error}</span>} */}
            <p className="text-center mb-2">New on the Platform ? <Link to={'/register'}><span className="text-green-600 font-bold">Register here</span></Link> </p>
          </div>
        </div>
         </div>
    );
};

export default Login;