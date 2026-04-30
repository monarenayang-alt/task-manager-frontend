import { useParams, useNavigate } from 'react-router-dom'

function TaskDetails({ tasks }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const task = tasks.find(task => task.id === Number(id))

  if (!task) {
    return <p className="text-danger">Task not found.</p>
  }

  return (
    <div className="card p-4">
      <h2 className="mb-3">Task Details</h2>

      <p>
        <strong>Title:</strong> {task.title}
      </p>

      <p>
        <strong>Status:</strong>{' '}
        {task.completed ? 'Completed' : 'Pending'}
      </p>

      <button
        className="btn btn-secondary"
        onClick={() => navigate('/list')}
      >
        Back to Task List
      </button>
    </div>
  )
}

export default TaskDetails;