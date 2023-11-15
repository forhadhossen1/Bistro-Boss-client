import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Log Out Success",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
            })
            .catch(error => console.log(error))
    }

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>

        {
            user ? <>
                <button onClick={handleLogOut} className=" btn-ghost">Log Out</button>
            </>
                :
                <><li><Link to='/login'>Login</Link></li></>
        }
    </>

    return (
        <div className="navbar fixed bg-opacity-20 z-10 bg-black text-white md:container md:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <li>
                    <Link to='/'>
                        <button className="btn btn-ghost">
                        <FaCartShopping className="text-2xl"></FaCartShopping>
                            <div className="badge badge-secondary">+0</div>
                        </button>
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;