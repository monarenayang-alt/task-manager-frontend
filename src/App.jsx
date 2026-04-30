import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import TaskDetails from './pages/TaskDetails'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Pages required by project */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/list"
            element={<TaskList tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/add"
            element={<AddTask tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/details/:id"
            element={<TaskDetails tasks={tasks} />}
          />

          {/* Edit task route (reuses AddTask component) */}
          <Route
            path="/edit/:id"
            element={<AddTask tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App