

const User = () => {
    return (
        <div className=''>
            <div className="mb-4">
                <h1 className="text-6xl font-bold text-center my-8">OUR Users</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:w-4/5 mx-auto">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-96" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">DOCTORS!</h2>
                    </div>
                </div>
                {/*  */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-96 object-cover" src="https://img.freepik.com/premium-photo/diverse-classmates-doing-task-lesson-studying-classroom-with-teacher_562687-3501.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">student!</h2>
                    </div>
                </div>
                {/*  */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-96 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbhHdf1d1o7mq8RrOr3GUQj0yFT0HZFTTlON4cNNGNTHvqIjrPwrwHqW814oW2QEYKtc&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Banker!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;