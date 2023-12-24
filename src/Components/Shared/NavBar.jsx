
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import Dropdown from "../Dropdown/Dropdown";


const NavBar = () => {
    const { user } = useAuth()
    const Links = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-4 border-black" : "font-bold "
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-4 border-black" : "font-bold "
            }
        >
            Dashboard
        </NavLink>
        {
            user ?
                ""
                :
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold border-b-4 border-black" : "font-bold "
                    }
                >
                    Login
                </NavLink>
        }
    </>



    return (
        <div className="navbar  bg-primary3 lg:px-20">
            <div className="navbar-start s">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Task Manager</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Dropdown />
                        :
                        ""

                }
            </div>
        </div>
    );
};

export default NavBar;