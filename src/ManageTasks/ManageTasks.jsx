import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import { Toaster } from "react-hot-toast";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  return (
    <>
      <Toaster></Toaster>
      <div className="flex flex-col items-center pt-32 gap-16">
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTask tasks={tasks} setTasks={setTasks}></ListTask>
      </div>
    </>
  );
};

export default ManageTasks;
