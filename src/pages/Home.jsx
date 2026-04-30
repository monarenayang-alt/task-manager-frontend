import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Task Manager</h1>

      <p>
        This application helps you add, manage, and track your daily tasks.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/list" style={{ marginLeft: "10px" }}>
          <button>View Tasks</button>
        </Link>

        <Link to="/add" style={{ marginLeft: "10px" }}>
          <button>Add Task</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
