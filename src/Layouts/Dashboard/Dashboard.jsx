import { FaAddressBook, FaCalendar, FaCartShopping, FaEnvelope, FaMoneyBill, FaStar } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-6 space-y-5 uppercase">
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

                    <div className="divider"></div>

                    {/* shared nav link >>>>>>>>>  */}

                    <li><NavLink to='/'>
                        <FaHome />  Home
                    </NavLink></li>

                    <li><NavLink to='/menu'>
                        <FaSearch />  Menu
                    </NavLink></li>

                    <li><NavLink to='/contact'>
                        <FaEnvelope/> Contact
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