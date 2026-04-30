import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">Task Manager</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/list">
            Task List
          </Link>
          <Link className="btn btn-outline-light" to="/add">
            Add Task
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar