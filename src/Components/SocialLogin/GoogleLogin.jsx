import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-block">
                <FaGoogle className="text-xl text-blue-700"></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;