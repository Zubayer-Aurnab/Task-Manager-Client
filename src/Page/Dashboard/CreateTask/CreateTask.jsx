

const CreateTask = () => {

    const handelCreateTask = (e) => {
        e.preventDefault();
        const form = e.target
        const taskTitle = form.name.value
        const taskDescription = form.description.value
        const taskPriority = form.tag.value
        const time = form.date.value
        console.log({ taskTitle, taskDescription, taskPriority, time })
    }

    return (
        <div className=" ">
            <h1 className="text-center text-3xl font-bold my-4">Create Task</h1>
            <div className="p-4">
                <form
                    onSubmit={handelCreateTask}
                    className="   lg:w-3/5 mx-auto rounded-2xl p-5 border text-black" >


                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div>
                            <div className="relative z-0  mb-5 group">
                                <input
                                    type="text"
                                    name="name"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary1 focus:outline-none focus:ring-0 focus:border-primary1 peer "
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary1 peer-focus:dark:text-primary1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Task Title
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="relative z-0  mb-5 group">
                                <label > Description</label>
                                <textarea required name="description" className="textarea bg-primary3 w-full" placeholder="Description"></textarea>

                            </div>
                        </div>

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10   items-center ">
                        <div>
                            <div className="relative z-0  mb-5 group  ">
                                <select required name="tag" className="select bg-primary3 font-bold  w-full max-w-xs">
                                    <option disabled selected>Priority</option>
                                    <option>High</option>
                                    <option>Moderate</option>
                                    <option>Low</option>

                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="relative z-0  mb-5 group ">
                                <input required name="date" type="date" className="border border-primary1 p-2 px-4 rounded-3xl" />
                            </div>
                        </div>

                    </div>

                    <div className="w-1/2 mx-auto my-10">
                        <button className="btn bg-primary2 font-bold w-full hover:bg-primary3 ">ADD</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateTask;