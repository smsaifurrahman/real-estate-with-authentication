import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Result from "postcss/lib/result";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const {user,logOut } = useContext(AuthContext);
    const navLink = <>
    
        <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li className="lg:mx-3"> <NavLink to={'/update'}> Update </NavLink> </li>
        <li> <NavLink to={'/contact-us'}> Contact Us </NavLink> </li>
    </>
  const handleLogOut = () => {
    logOut()
    .then((result)=> {
      toast.success('You are Logged out')
    })
    .catch()
  }

    return (
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLink}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">EliteDwellings</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
          {navLink}
            
          </ul>
        </div>
  <div className="navbar-end">
    {
      user ? 
 
        <div className="flex items-center">
              <div tabIndex={0} role="button" className="btn  btn-circle avatar">
          <div className="w-10 rounded-full">
            <img className="hover:" title={user?.displayName} alt="Tailwind CSS Navbar component" src={user.photoURL} />
           
          </div>
        
        
      </div>
      <button onClick={handleLogOut}  className="btn">Logout</button>
        </div>
        :  <NavLink to={'/login'}><button className="btn">Login</button></NavLink>
        
          }
        

    
 
  </div>
     
 
  

</div>
    );
};

export default Navbar;