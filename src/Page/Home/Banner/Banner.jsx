import BannerPhoto from "../../../assets/kisspng-project-management-sales-increase-5b4312cb57fa18.9365269315311223793604.png"

const Banner = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 mt-10">
                <div className="flex-1 text-center ">
                    <div className="flex flex-col justify-center items-center space-y-2  h-full">
                        <h1 className="text-2xl md:text-4xl">Manage</h1>
                        <p className="text-lg md:text-2xl">Your Time and Work With us</p>
                        <div className="">
                            <button className="btn bg-primary3 hover:bg-primary2 btn-sm ">Explore</button>
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