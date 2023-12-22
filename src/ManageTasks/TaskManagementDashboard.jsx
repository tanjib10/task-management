import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const TaskManagementDashboard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  const moveTask = useCallback(
    (sourceList, destinationList, sourceIndex, destinationIndex) => {
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        const [movedTask] = updatedTasks[sourceList].splice(sourceIndex, 1);
        updatedTasks[destinationList].splice(destinationIndex, 0, movedTask);
        return updatedTasks;
      });
    },
    []
  );

  const addTask = (newTask) => {
    newTask.id =
      tasks.todo.length + tasks.ongoing.length + tasks.completed.length + 1;
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, newTask],
    }));
  };

  const deleteTask = (listName, index) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[listName].splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <TaskForm onSubmit={addTask} />
        <DndProvider backend={HTML5Backend}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <TaskList
              title="To-Do"
              tasks={tasks.todo}
              listName="todo"
              moveTask={moveTask}
              onDelete={deleteTask}
            />
            <TaskList
              title="Ongoing"
              tasks={tasks.ongoing}
              listName="ongoing"
              moveTask={moveTask}
              onDelete={deleteTask}
            />
            <TaskList
              title="Completed"
              tasks={tasks.completed}
              listName="completed"
              moveTask={moveTask}
              onDelete={deleteTask}
            />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default TaskManagementDashboard;
