import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";
import "./AdmissionForm.css";

const classes = [
  "Nursery", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11", "Class 12",
];

const emptyForm = {
  name: "",
  fatherName: "",
  phone: "",
  email: "",
  classApplied: "",
  address: "",
};

function AdmissionForm() {
  const [form, setForm] = useState(emptyForm);
  const [msg, setMsg] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [myList, setMyList] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("userToken");
  const userName = localStorage.getItem("userName");

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const loadMyList = async () => {
    try {
      const res = await fetch(`${API}/admission/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401 || res.status === 403) return logout();
      setMyList(await res.json());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    loadMyList();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ text: "", type: "" });
    try {
      const res = await fetch(`${API}/admission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg({ text: "Form submitted. Status will update here.", type: "ok" });
        setForm(emptyForm);
        loadMyList();
      } else {
        setMsg({ text: data.message, type: "error" });
      }
    } catch (err) {
      setMsg({ text: "Server not reachable", type: "error" });
    }
    setLoading(false);
  };

  return (
    <section className="adm-page">
      <div className="adm-box">
        <h2>Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Student name *</label>
          <input name="name" value={form.name} onChange={handleChange} required />

          <label>Father's name *</label>
          <input name="fatherName" value={form.fatherName} onChange={handleChange} required />

          <label>Phone number *</label>
          <input name="phone" value={form.phone} onChange={handleChange} maxLength={10} required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />

          <label>Class *</label>
          <select name="classApplied" value={form.classApplied} onChange={handleChange} required>
            <option value="">Select class</option>
            {classes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <label>Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} rows={3} />

          {msg.text && <p className={"adm-msg " + msg.type}>{msg.text}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit admission"}
          </button>
        </form>
      </div>

      <div className="adm-box">
        <h2>My applications</h2>
        <p className="adm-user">Logged in as {userName}</p>

        {myList.length === 0 && <p className="adm-msg">No application submitted yet.</p>}

        {myList.map((s) => (
          <div className="adm-result" key={s._id}>
            <div>
              <strong>{s.name}</strong>
              <span>{s.classApplied}</span>
            </div>
            <span className={"badge " + s.status}>{s.status}</span>
          </div>
        ))}

        <button onClick={logout}>Logout</button>
      </div>
    </section>
  );
}

export default AdmissionForm;
