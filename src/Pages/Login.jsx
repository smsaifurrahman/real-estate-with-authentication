import React, { useState } from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';




const Login = () => {
    const {logIn,googleSignIn,githubSignIn,setLoading} = useContext(AuthContext);
    const location = useLocation()

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        logIn(data.email, data.password)
        .then(result => {
          setLoading(false)
          navigate( location?.state ? location.state : '/');
            toast.success('You have logged in Successfully')
        })
        .catch(error => {
            setError("");
            toast.error('Incorrect Email or Password')
        })
      }
      // Social media sign in 
      const handleSocialSignIn = (socialSignIn) => {
          socialSignIn()
          .then(result => {
            setLoading(false)
            toast.success('You have successfully signed in.');
            
            navigate( location?.state ? location.state : '/');

          })
          .catch();
      }


    return (
        <div className="hero my-4 ">
          <Helmet><title>EliteDwelling | Login</title></Helmet>

          <div className="card w-full md:w-2/5 lg:w-2/5 shadow-2xl bg-base-100">
          <h2 className='text-center text-2xl font-bold my-2'>Login Now</h2>
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
                <div className="relative  "> 
                 <input 
                    type={showPassword ? 'text': 'password'} 
                    placeholder="password" 
                    {...register("password", { required: true })}
                    className="input input-bordered w-full"
                      />
                      <span className="absolute top-4  right-2" onClick={()=> setShowPassword(!showPassword)} > {showPassword ? <FaEyeSlash />: <FaEye /> } </span>
                  </div>
                   {errors.password && <span className="text-red-500">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white">Login</button>
              </div>
            </form>
            {/* Social Login  */}
            <div className='text-center font-bold'>
           
            <p className="px-3 text-xl my-3 dark:text-gray-600">-------------- Login with social accounts ------------</p>
              <button onClick={()=>handleSocialSignIn(googleSignIn)} className='text-green-600 text-3xl'><FcGoogle  />
                    </button>
              <button onClick={()=> handleSocialSignIn(githubSignIn)} className=' ml-4 text-3xl'><FaGithub />
              </button>    
                    

            </div>
            {/* {error && <span className="text-red-500">{error}</span>} */}
            <p className="text-center mb-6">New on the Platform ? <Link to={'/register'}><span className="text-green-600 font-bold">Register here</span></Link> </p>
          </div>
         </div>
    );
};

export default Login;