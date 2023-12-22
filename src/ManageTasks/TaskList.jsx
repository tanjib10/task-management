import { useDrop } from "react-dnd";
import Task from "./Task";

const TaskList = ({ title, tasks, listName, moveTask, onDelete }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => {
      const sourceList = item.listName;
      const destinationList = listName;
      const sourceIndex = item.index;
      const destinationIndex = tasks.length;

      moveTask(sourceList, destinationList, sourceIndex, destinationIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`mt-4 p-4 bg-gray-200 rounded ${
        isOver ? "border-2 border-blue-500" : ""
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>
        {tasks?.map((task, index) => (
          <Task
            key={task?.id}
            task={task}
            index={index}
            onDelete={() => onDelete(listName, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
