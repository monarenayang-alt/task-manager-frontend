import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";

function App() {
  // ✅ Tasks state (always an array — prevents crashes)
  const [tasks, setTasks] = useState([]);

  // ✅ Auth token (from login)
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />

        {/* Protected routes */}
        <Route
          path="/list"
          element={
            token ? (
              <TaskList tasks={tasks} setTasks={setTasks} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/add"
          element={
            token ? (
              <AddTask tasks={tasks} setTasks={setTasks} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Catch‑all */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
