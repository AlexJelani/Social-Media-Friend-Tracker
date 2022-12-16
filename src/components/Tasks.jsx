import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(task.id)} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Tasks;
