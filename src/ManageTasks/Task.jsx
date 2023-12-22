import { useDrag } from "react-dnd";

const Task = ({ task, index, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { type: "TASK", listName: "todo", index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`flex items-center justify-between mb-2 bg-gray-100 p-2 rounded ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <span>{task?.title}</span>
      <button onClick={onDelete} className="text-red-500 mx-2">
        Delete
      </button>
    </div>
  );
};

export default Task;
