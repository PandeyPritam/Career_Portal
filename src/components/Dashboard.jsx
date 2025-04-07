import React, { useEffect, useState } from "react";
import axios from "../api/api";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const response = await axios.get("/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
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

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary">Welcome to the Dashboard</h2>
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
    </div>
  );
}

export default Dashboard;