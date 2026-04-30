import TaskCard from '../components/TaskCard'

function TaskList({ tasks, setTasks }) {

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <div>
      <h2 className="mb-3">Task List</h2>

      {tasks.length === 0 && (
        <p className="text-muted">No tasks added yet.</p>
      )}

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      ))}
    </div>
  )
}

export default TaskList