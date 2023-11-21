import { FaAddressBook, FaBook, FaCalendar, FaCartShopping, FaEnvelope, FaList, FaMoneyBill, FaStar, FaUsers, FaUtensils } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {

    //  todo : get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-6 space-y-5 uppercase font-bold">
                    {
                        isAdmin ? <>
                                <li><NavLink to='/dashboard/adminHome'>
                                    <FaHome />  Admin Home
                                </NavLink></li>

                                <li><NavLink to='/dashboard/addItems'>
                                    <FaUtensils /> Add Items
                                </NavLink></li>

                                <li><NavLink to='/dashboard/manageItems'>
                                    <FaList /> Manage Items
                                </NavLink></li>

                                <li><NavLink to='/dashboard/manageBooking'>
                                    <FaBook /> Manage Booking
                                </NavLink></li>

                                <li><NavLink to='/dashboard/allUsers'>
                                    <FaUsers></FaUsers>  All Users
                                </NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <FaHome />  User Home
                                </NavLink></li>

                                <li><NavLink to='/dashboard/reservation'>
                                    <FaCalendar /> Reservation
                                </NavLink></li>

                                <li><NavLink to='/dashboard/paymentHistory'>
                                    <FaMoneyBill />Payment History
                                </NavLink></li>

                                <li><NavLink to='/dashboard/cart'>
                                    <FaCartShopping></FaCartShopping>   My Cart
                                </NavLink></li>

                                <li><NavLink to='/dashboard/review'>
                                    <FaStar />Add Review
                                </NavLink></li>

                                <li><NavLink to='/dashboard/boking'>
                                    <FaAddressBook />My Booking
                                </NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    {/* shared nav link >>>>>>>>>  */}

                    <li><NavLink to='/'>
                        <FaHome />  Home
                    </NavLink></li>

                    <li><NavLink to='/menu'>
                        <FaSearch />  Menu
                    </NavLink></li>

                    <li><NavLink to='/contact'>
                        <FaEnvelope /> Contact
                    </NavLink></li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;