import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State for logout loader
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
        alert("Error: " + (error.response?.data?.error || error.message));
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true); // Show loader
    setTimeout(() => {
      localStorage.removeItem("token"); // Remove the token from localStorage
      setIsLoggingOut(false); // Hide loader
      navigate("/login"); // Redirect to the login page
    }, 2000); // Simulate a delay for the logout process
  };

  const goToHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="container my-5">
      <h2 className="text-center  fw-bold ">Welcome to the Dashboard</h2>
      {user ? (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">User Details</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: {user.firstName} {user.lastName}</li>
              <li className="list-group-item">Email: {user.email}</li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">Loading...</p>
      )}

      {/* Buttons for Home and Logout */}
      <div className="mt-4 text-center">
        <button className="btn btn-primary me-3" onClick={goToHome}>
          Go to Home
        </button>
        <button className="btn btn-danger" onClick={handleLogout} disabled={isLoggingOut}>
          {isLoggingOut ? (
            <span>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Logging out...
            </span>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;