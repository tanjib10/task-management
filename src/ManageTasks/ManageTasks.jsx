import { useContext, useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const ManageTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <div className="min-h-screen  text-cool-gray-800">
      <Toaster />

      {/* Header Section */}
      <header className="p-4 mt-10">
        <div className="container mx-auto flex  justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mr-4 border-2 border-cool-gray-50"
            />
            <div>
              <h1 className="text-2xl mt-4 font-bold">{user.displayName}</h1>
              {/* Add any additional user details here */}
            </div>
          </div>
          {/* Add any additional header elements here */}
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto my-8 bg-cool-gray-50 p-8 rounded-md shadow-lg">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-semibold mb-4 text-cool-gray-800">
            Manage Your Tasks
          </h2>
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </div>
  );
};

export default ManageTasks;
