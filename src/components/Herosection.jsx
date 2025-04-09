import React, { useState } from "react";
import axios from "../api/api";

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/courses/search?query=${searchQuery}`);
      setCourses(response.data.courses);
    } catch (error) {
      alert("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="hero-section text-white text-center py-5" style={{ background: "linear-gradient(90deg, #0056b3, #007bff)", minHeight: "auto", padding: "20px 0" }}>
    <div className="container">
      <h1 className="display-4 fw-bold">Unlock Your Career Potential</h1>
      <p className="lead">Find the best courses, mentors, and opportunities to grow your career.</p>
      <div className="mt-4">
        <input
          type="text"
          className="form-control d-inline-block w-50 me-2"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-light" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="row mt-5">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <button className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}


export default HeroSection;