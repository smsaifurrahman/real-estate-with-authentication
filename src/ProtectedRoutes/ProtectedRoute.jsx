import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate ,useLocation} from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const {user,loading} =  useContext(AuthContext);
    const location = useLocation()
    // console.log(location);
    if(loading) {
        return <span className="loading loading-dots loading-lg"></span>

    }
    if(user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default ProtectedRoute;