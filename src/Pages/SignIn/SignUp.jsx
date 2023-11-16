import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire("User created Successfully");
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
            })
    }



    // reguler style .. 

    // const { createUser } = useContext(AuthContext);

    // const handleSignUp = event => {

    // event.preventDefault();

    // const form = event.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // const signUp = { name, email, password };
    // console.log(signUp);

    // createUser(email, password)
    //     .then(result => {
    //         console.log(result.user)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-center py-6">Sign Up</h1>
                        <img src={signUp} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-4xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="photo URL" className="input input-bordered" required />
                                {errors.photoUrl && <span className="text-red-600">Photo URL field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">Email field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be one spacial characters, one lower and capitel letter</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                                <div className="divider ">OR</div>

                                <GoogleLogin>

                                </GoogleLogin>
                            </div>
                            <p className='text-center'>Already have an account<Link to='/login'><button className="btn btn-link">Login</button></Link> </p>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;