import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Components/Hooks/useAuth/useAuth";
import { GrDiamond, GrDislike, GrLinkNext } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyTask = () => {
    const { user } = useAuth()
    const { data: tasks, refetch } = useQuery({
        queryKey: ["data", user?.email],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/task")
            return res.data
        }
    })
    // console.log(tasks)
    const handelTodo = (_id) => {
        axios.patch(`http://localhost:5000/task/${_id}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }
    const handelOngoing = (_id) => {
        axios.patch(`http://localhost:5000/ongoing/${_id}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }
    const handelDelete = (_id) => {
        axios.delete(`http://localhost:5000/task-delete/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulations",
                        text: `successfully Completed`,
                       
                    });
                }
                refetch()
            })
    }
    return (
        <div className="flex gap-8 justify-between flex-col md:flex-row px-2 lg:w-4/5 mx-auto mt-10">
            <div className="w-full  ">
                <h1 className="p-10 bg-red-200 rounded-2xl font-bold">TODO</h1>
                {
                    tasks?.map((task, idx) => (
                        <div style={{ display: `${task.status === "todo" ? "" : "none"}` }} className="bg-base-200 p-4 rounded-xl w-full my-2" key={idx}>
                            <p className="text-3xl">{task.taskTitle} <span className="text-[12px] px-2 rounded-full bg-purple-500 text-white">{task.taskPriority}</span></p>
                            <p>{task.taskDescription}</p>
                            <p className="text-[12px] px-2">{task.time}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handelTodo(task._id)}
                                    className="p-2 bg-lime-300 rounded-full"
                                >
                                    <GrLinkNext />
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* ONGOING */}
            <div className="w-full ">
                <h1 className="p-10 bg-blue-200 rounded-2xl font-bold">ONGOING</h1>
                {
                    tasks?.map((task, idx) => (
                        <div style={{ display: `${task.status === "ongoing" ? "" : "none"}` }} className="bg-base-200 p-4 rounded-xl w-full my-2" key={idx}>
                            <p className="text-3xl">{task.taskTitle} <span className="text-[12px] px-2 rounded-full bg-purple-500 text-white">{task.taskPriority}</span></p>
                            <p>{task.taskDescription}</p>
                            <p className="text-[12px] px-2">{task.time}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handelOngoing(task._id)}
                                    className="p-2 bg-lime-300 rounded-full"
                                >
                                    <GrLinkNext />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* FINISHED */}
            <div className="w-full " >
                <h1 className="p-10 bg-green-200 rounded-2xl font-bold">Finished</h1>
                {
                    tasks?.map((task, idx) => (
                        <div style={{ display: `${task.status === "finished" ? "" : "none"}` }} className="bg-base-200 p-4 rounded-xl w-full my-2" key={idx}>
                            <p className="text-3xl">{task.taskTitle} <span className="text-[12px] px-2 rounded-full bg-purple-500 text-white">{task.taskPriority}</span></p>
                            <p>{task.taskDescription}</p>
                            <p className="text-[12px] px-2">{task.time}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handelDelete(task._id)}
                                    className="p-2 bg-red-500 rounded-full text-white"
                                >
                                    <MdDeleteForever />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyTask;