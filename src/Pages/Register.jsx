import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate ,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { Helmet } from "react-helmet-async";





const Register = () => {
    const {createUser,logOut,auth} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    // const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();
    


    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm();

      const onSubmit = (data,e) => {
       
        if(data.password.length < 6) {
            setError('Password should be at least 6 character');
            return
        }
        else if(!/[A-Z]/.test(data.password)) {
            setError('Your password should have at least one uppercase ');
            return
        }
        else if(!/[a-z]/.test(data.password)) {
            setError('Your password should have at least one Lowercase ');
            return
        }
        
        // reset error
        setError('')
        



        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
              displayName: data.name,
              photoURL: data.image

            })
            .then()
            .catch()
            
            logOut();
            e.target.reset();
            toast.success('You have successfully registered. You can Login Now')
            // setRegistrationSuccess(true)
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
           
        })
      }
      // if(registrationSuccess){
      //   return <Navigate to="/login" />;
      // }


    return (
         <div className=" items-center flex flex-col min-h-screen my-4 ">
           <h2 className='text-center text-3xl font-bold my-2'>Register Here</h2>
          <Helmet><title>EliteDwelling | Register</title></Helmet>
          <div className="card  w-full md:w-2/5 lg:w-2/5  shadow-2xl bg-base-100">
         
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                 className="input input-bordered"   />
                   {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input 
                type="text"
                placeholder="Photo URL"
                {...register("image", { required: true })}
                 className="input input-bordered"   />
                 {errors.image && <span className="text-red-500">This field is required</span>}
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

                      {error && <span className="text-red-500">{error}</span>}
                    
                
              </div>
              <div className="form-control mt-6">
            <button  className="btn bg-green-600 text-white">  Register </button>
              </div>
            </form>
            <p className="text-center mb-6">Already have account? <Link to={'/login'}><span className="text-green-600 font-bold">Login here</span></Link> </p>
          </div>
         </div>
    );
};

export default Register;