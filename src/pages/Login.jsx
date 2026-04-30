const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await fetch(
      "https://task-manager-backend-1.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      setError(data.message || "Login failed")
      return
    }

    // ✅ Store token (proof of integration)
    localStorage.setItem("token", data.token)
    setToken(data.token)

    navigate("/list")

  } catch (err) {
    console.error(err)
    setError("Backend not reachable")
  }
}