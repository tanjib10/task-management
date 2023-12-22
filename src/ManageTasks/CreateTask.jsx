/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line no-unused-vars
const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      return toast.error("A task must have more than 3 characters");
    }

    setTasks((prev) => {
      const list = Array.isArray(prev) ? [...prev, task] : [task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task Created");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">
        Add
      </button>
    </form>
  );
};

export default CreateTask;
