import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import "./Admin.css";

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");
  const authHeader = { Authorization: `Bearer ${token}` };

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const loadStudents = async () => {
    try {
      const res = await fetch(`${API}/admin/students`, { headers: authHeader });
      if (res.status === 401) return logout();
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      setError("Server not reachable");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    loadStudents();
  }, []);

  const changeStatus = async (id, status) => {
    const res = await fetch(`${API}/admin/students/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeader },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setStudents(students.map((s) => (s._id === id ? { ...s, status } : s)));
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this application?")) return;
    const res = await fetch(`${API}/admin/students/${id}`, {
      method: "DELETE",
      headers: authHeader,
    });
    if (res.ok) setStudents(students.filter((s) => s._id !== id));
  };

  const count = (status) => students.filter((s) => s.status === status).length;

  const shown = students.filter((s) => {
    const matchStatus = filter === "all" || s.status === filter;
    const text = search.toLowerCase();
    const matchSearch =
      s.name.toLowerCase().includes(text) || s.phone.includes(text);
    return matchStatus && matchSearch;
  });

  return (
    <div className="dash">
      <div className="dash-top">
        <h2>Admission dashboard</h2>
        <button className="logout" onClick={logout}>Logout</button>
      </div>

      <div className="stats">
        <div className="stat"><b>{students.length}</b>Total</div>
        <div className="stat"><b>{count("pending")}</b>Pending</div>
        <div className="stat"><b>{count("approved")}</b>Approved</div>
        <div className="stat"><b>{count("rejected")}</b>Rejected</div>
      </div>

      <div className="tools">
        <input
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {error && <p className="err">{error}</p>}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Father</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr>
                <td colSpan="7" className="empty">No applications found</td>
              </tr>
            )}
            {shown.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.fatherName}</td>
                <td>{s.phone}</td>
                <td>{s.classApplied}</td>
                <td>{new Date(s.createdAt).toLocaleDateString("en-IN")}</td>
                <td><span className={"badge " + s.status}>{s.status}</span></td>
                <td className="actions">
                  <button className="ok" onClick={() => changeStatus(s._id, "approved")}>Approve</button>
                  <button className="no" onClick={() => changeStatus(s._id, "rejected")}>Reject</button>
                  <button className="del" onClick={() => deleteStudent(s._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
