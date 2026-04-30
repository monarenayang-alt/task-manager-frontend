import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AddTask({ tasks, setTasks }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const editing = Boolean(id)
  const existingTask = tasks.find(task => task.id === Number(id))

  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (editing && existingTask) {
      setTitle(existingTask.title)
    }
  }, [editing, existingTask])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') {
      setError('Task title is required')
      return
    }

    if (editing) {
      // UPDATE task
      setTasks(
        tasks.map(task =>
          task.id === Number(id)
            ? { ...task, title }
            : task
        )
      )
    } else {
      // ADD task
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title,
          completed: false
        }
      ])
    }

    navigate('/list')
  }

  return (
    <div className="card p-4">
      <h2 className="mb-3">
        {editing ? 'Edit Task' : 'Add New Task'}
      </h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setError('')
          }}
        />

        <button className="btn btn-primary">
          {editing ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  )
}

export default AddTask