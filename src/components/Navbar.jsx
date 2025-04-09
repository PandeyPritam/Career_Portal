import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#343a40" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/" style={{ color: "#f8f9fa" }}>
          <i className="fas fa-briefcase"></i> Career Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#achievements">
                <i className="fas fa-trophy"></i> Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#featured">
                <i className="fas fa-star"></i> Featured
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#blog">
                <i className="fas fa-blog"></i> Blog
              </a>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;