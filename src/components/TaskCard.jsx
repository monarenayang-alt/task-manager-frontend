function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: task.completed ? "#e6ffe6" : "#ffffff"
      }}
    >
      <h4>{task.title}</h4>

      <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>

      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;