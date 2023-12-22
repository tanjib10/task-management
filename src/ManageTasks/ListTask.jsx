import { useEffect, useState } from "react";

const ListTask = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "todo");
    const fOngoing = tasks.filter((task) => task.status === "ongoing");
    const fCompleted = tasks.filter((task) => task.status === "completed");

    setTodos(fTodos);
    setOngoing(fOngoing);
    setCompleted(fCompleted);
  }, [tasks]);
  const statuses = ["todo", "ongoing", "completed"];
  return (
    <div className="flex gap-16 ">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          ongoing={ongoing}
          completed={completed}
        ></Section>
      ))}
    </div>
  );
};

export default ListTask;

const Section = ({ status, tasks, setTasks, todos, ongoing, completed }) => {
  return (
    <div>
      <h2>{status}</h2> List
    </div>
  );
};
const Header = ({ text, bg, count }) => {
  return (
    <div>
      <h2>{status}</h2> List
    </div>
  );
};
