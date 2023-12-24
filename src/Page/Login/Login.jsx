import Lottie from "lottie-react";
import login from "../../../public/login.json"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Components/Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { GoogleAuth, LogInUser,user } = useAuth()
    const GoogleLogin = () => {
        GoogleAuth()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user)
            })
    }
    const handleSubmitLogin = () => {

    }
    return (
        <div className=" ">
            <div>
                <div className="">
                    <section className="  flex items-center lg:h-screen  p-4 ">
                        <div className="py-8 px- mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="flex flex-col justify-center  p-1 px-10  rounded-lg opacity-95">

                                <Lottie
                                    animationData={login}


                                />
                            </div>
                            <div>
                                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl bg-gradient-to-r from-primary1 via-primary3 to-primary4">
                                    <h2 className="text-2xl font-extrabold text-black">
                                        Log in to  ContestHub
                                    </h2>
                                    <form
                                        onSubmit={handleSubmitLogin}
                                        className="mt-8 space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="name@company.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className='flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0'>
                                            <button
                                                type="submit"
                                                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Login to your account
                                            </button>

                                            <button
                                                onClick={GoogleLogin}

                                                className="w-full px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-white focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-white dark:hover:bg-white dark:focus:ring-white flex items-center justify-center gap-4 "
                                            >
                                                Login with Google
                                                <FcGoogle className='text-xl' />
                                            </button>




                                        </div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-black">
                                            Not registered yet? <Link to={'/register'} className="text-primary0 hover:underline font-extrabold ">Create account</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Login;