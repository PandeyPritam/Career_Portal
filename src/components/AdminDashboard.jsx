import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Admin Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View and manage all registered users.</p>
              <Link to="/admin/users" className="btn btn-primary">
                Manage Users
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Manage Courses</h5>
              <p className="card-text">Add, edit, or delete courses.</p>
              <Link to="/admin/courses" className="btn btn-primary">
                Manage Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;