import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const {user} = useContext(AuthContext) || {}
  

    const userName = user?.displayName || '' ;
    const userImage = user?.photoURL || '';
    const email = user?.email || '';
    const [name, setName] = useState(userName);
    const [image,setImage] = useState(userImage);

    const handNameChange = (e) => {
        setName(e.target.value)
    }
    const handImageChange = (e) => {
        setImage(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        updateProfile(user, {
            displayName: name,
            photoURL: image
        })
        .then(()=> {
            toast.success('You successfully updated your profile');

            console.log(user.currentUser);
        })
        .catch()
    }
    



    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
      <form onSubmit={handleUpdate} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value={email} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          value={name}
          onChange={handNameChange}
          placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input 
          type="text"
          value={image}
          onChange={handImageChange}
          placeholder="image url" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
    );
};

export default Update;