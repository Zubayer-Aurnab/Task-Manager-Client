import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Components/Hooks/useAuth/useAuth";
import { GrLinkNext } from "react-icons/gr";

const MyTask = () => {
    const { user } = useAuth()
    const { data: tasks } = useQuery({
        queryKey: ["data", user?.email],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/task")
            return res.data
        }
    })
    console.log(tasks)
    return (
        <div className="flex gap-8 justify-between w-4/5 mx-auto mt-10">
            <div className="w-full  ">
                <h1 className="p-10 bg-red-200 rounded-2xl font-bold">TODO</h1>
                {
                    tasks?.map((task, idx) => <div className=" bg-base-200 p-4 rounded-xl w-full my-2" key={idx}>
                        <p className="text-3xl"> {task.taskTitle} <span className="text-[12px] px-2 rounded-full bg-purple-500 text-white">{task.taskPriority}</span></p>
                        <p>{task.taskDescription}</p>
                        <p className="text-[12px] px-2 ">{task.time}</p>
                        <div className="flex justify-end">
                            <button className="p-2 bg-lime-300 rounded-full" ><GrLinkNext /> </button>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-full ">
                <h1 className="p-10 bg-blue-200 rounded-2xl font-bold">ONGOING</h1>
            </div>
            <div className="w-full " >
                <h1 className="p-10 bg-green-200 rounded-2xl font-bold">Finished</h1>
            </div>
        </div>
    );
};

export default MyTask;