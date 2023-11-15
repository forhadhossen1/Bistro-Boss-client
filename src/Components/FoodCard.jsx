
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item || {};
    const navigate = useNavigate();
    const location = useLocation()

    const {user} = useAuth()

    const handleAddtoCart = (food) => {
        if(user && user.email){
            // send cart item to 
        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from:location}})
                }
              });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img src={image} alt="item image" className="w-full" /></figure>
            <p className="absolute right-5 top-5 font-bold bg-slate-900 w-16 text-white p-2 ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddtoCart(item)} className="my-5 btn btn-outline bg-slate-100 border-yellow-500 border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;