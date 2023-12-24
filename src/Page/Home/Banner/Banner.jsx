import { Link } from "react-router-dom";
import BannerPhoto from "../../../assets/kisspng-project-management-sales-increase-5b4312cb57fa18.9365269315311223793604.png"
import useAuth from "../../../Components/Hooks/useAuth/useAuth";

const Banner = () => {
    const { user } = useAuth()
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:pt-10">
                <div className="flex-1 text-center ">
                    <div className="flex flex-col justify-center items-center space-y-2  h-full">
                        <h1 className="text-2xl md:text-4xl">Manage</h1>
                        <p className="text-lg md:text-2xl">Your Time and Work , With us</p>
                        <div className="">
                            {
                                user ? <Link to={'/dashboard'} className="btn bg-primary3 hover:bg-primary2 btn-sm ">Explore</Link> :
                                    <Link to={'/login'} className="btn bg-primary3 hover:bg-primary2 btn-sm  ">Explore</Link>

                            }

                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <img src={BannerPhoto} className="" alt="" />
                </div>
            </div>

        </>
    );
};

export default Banner;