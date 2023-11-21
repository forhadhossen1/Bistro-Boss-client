import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRouts = ({ children }) => {
    const { user, loading } = useAuth;
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();



    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    // if (user && isAdmin) {
    if (isAdmin) {
        return children
    } else {

        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }

};

export default AdminRouts;