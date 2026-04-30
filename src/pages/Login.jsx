import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://task-manager-backend-1.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/list");

    } catch (err) {
      console.error(err);
      setError("Backend not reachable");
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
        textAlign: "center"
      }}
    >
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;