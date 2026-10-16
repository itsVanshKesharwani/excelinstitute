import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import "./Admin.css";

function UserLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const url = isRegister ? "register" : "login";
    try {
      const res = await fetch(`${API}/auth/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("userName", data.name);
        navigate("/admission");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server not reachable");
    }
  };

  return (
    <div className="login-wrap">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>{isRegister ? "Create student account" : "Student login"}</h2>

        {isRegister && (
          <>
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
            <input name="phone" placeholder="Phone number" maxLength={10} value={form.phone} onChange={handleChange} required />
          </>
        )}
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />

        {error && <p className="err">{error}</p>}

        <button type="submit">{isRegister ? "Register" : "Login"}</button>

        <p className="switch" onClick={() => { setIsRegister(!isRegister); setError(""); }}>
          {isRegister ? "Already have an account? Login" : "New student? Create account"}
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
