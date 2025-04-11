import React, { useState } from "react";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user", // Default role is "user"
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      console.log("Form Data Sent to Backend:", formData); // Debugging log
      const response = await axios.post("/auth/login", formData);
      console.log("Login Response:", response.data);
      localStorage.setItem("token", response.data.token);
  
      setAlertMessage("Login successful!");
      setAlertType("success");
      if (response.data.isAdmin) {
        navigate("/admin"); // Redirect to admin panel
      } else {
        navigate("/dashboard"); // Redirect to user dashboard
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
  
      setAlertMessage(error.response?.data?.error || "An error occurred during login.");
      setAlertType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center">Login</h2>

        {/* Alert Message */}
        {alertMessage && (
          <div className={`alert alert-${alertType} shadow-lg my-3`}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    alertType === "success"
                      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M12 8v4m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.994-1.85L21 4.85C20.924 3.816 20.06 3 19.006 3H5.144C4.09 3 3.226 3.816 3.15 4.85L3 18.15c.076 1.034.94 1.85 1.994 1.85z"
                  }
                />
              </svg>
              <span>{alertMessage}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <div>
              <label className="me-3">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleChange}
                />{" "}
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                />{" "}
                Admin
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isLoading}>
            {isLoading ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;