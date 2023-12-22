import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-4">
      <div className="flex items-center mb-2">
        <label>Title:</label>
        <input {...register("title")} className="ml-2 border rounded p-1" />
      </div>
      <div className="flex items-center mb-2">
        <label>Description:</label>
        <input
          {...register("description")}
          className="ml-2 border rounded p-1"
        />
      </div>
      <div className="flex items-center mb-2">
        <label>Deadline:</label>
        <input
          {...register("deadline")}
          type="date"
          className="ml-2 border rounded p-1"
        />
      </div>
      <div className="flex items-center mb-2">
        <label>Priority:</label>
        <select {...register("priority")} className="ml-2 border rounded p-1">
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
