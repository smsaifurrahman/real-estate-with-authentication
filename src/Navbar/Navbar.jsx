import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Result from "postcss/lib/result";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const {user,logOut } = useContext(AuthContext);
    const navLink = <>
    
        {/* <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li className="lg:mx-3"> <NavLink to={'/update'}> Update Profile </NavLink> </li>
        <li> <NavLink to={'/contact-us'}> Contact Us </NavLink> </li> */}
        {/* <li> <NavLink to={'/'} className={({isActive}) => isActive ? ' font-bold text-xl text-green-600 p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300'}> Home </NavLink> </li>
        <li className="md:mx-2" > <NavLink to={'/update'} className= {({isActive}) => isActive ? 'text-primary font-bold text-xl bg-green-500 p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300'} > Update Profile </NavLink> </li>
        <li> <NavLink to={'/contact-us'} className={({isActive}) => isActive ? 'text-primary font-bold text-xl bg-green-500 p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300'}> Contact Us </NavLink> </li> */}
        <NavLink to={'/'} className={({isActive}) => isActive ? ' font-bold text-xl text-orange-600 p-2 rounded-xl border-2 border-orange-300' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300'}> Home </NavLink>
        <NavLink to={'/update'} className= {({isActive}) => isActive ? ' font-bold text-orange-600 border-2 border-orange-300 text-xl p-2 rounded-xl md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300  md:mx-2'} > Update Profile </NavLink>
        <NavLink to={'/contact-us'} className={({isActive}) => isActive ? ' font-bold text-orange-600 text-xl border-2 border-orange-300  p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300'}> Contact Us </NavLink>


        

    
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
            <Link to={'/'} className="btn btn-ghost text-2xl text-blue-600 font-bold "> ElitesDwellings</Link>
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
        :  <NavLink to={'/login'} className={({isActive}) => isActive ? 'font-bold text-xl text-orange-600 p-2 rounded-xl border-2 border-orange-300' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300 ' }><button >Login</button></NavLink>
        
          }
        

    
 
  </div>
     
 
  

</div>
    );
};

export default Navbar;