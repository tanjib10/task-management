import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import { Toaster } from "react-hot-toast";

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  return (
    <>
      <Toaster></Toaster>
      <div className="flex flex-col items-center pt-32 gap-16">
        <CreateTask task={tasks} setTasks={setTasks}></CreateTask>
        <ListTask task={tasks} setTasks={setTasks}></ListTask>
      </div>
    </>
  );
};

export default ManageTasks;
