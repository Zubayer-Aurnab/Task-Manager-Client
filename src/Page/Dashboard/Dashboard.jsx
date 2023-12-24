import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className=" md:h-screen bg-primary1 md:w-[25%] lg:w-[15%] p-4 space-y-4">

                <Link to={'/dashboard/my-created'} className="btn btn-outline font-bold w-full ">Create Task</Link>
                <Link to={'/dashboard'} className="btn btn-outline font-bold w-full ">My Task</Link>
                <Link to={'/dashboard/finished'} className="btn btn-outline font-bold w-full ">Finished Task</Link>

            </div>
            <div className=" md:h-screen md:w-[85%]">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;