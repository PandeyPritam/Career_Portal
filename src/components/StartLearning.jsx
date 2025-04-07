import React, { useEffect, useState } from "react";
import axios from "../api/api";

function StartLearning() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/startlearning");
        setCourses(response.data.courses);
      } catch (error) {
        alert("Error: " + error.response.data.error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary">Start Learning</h2>
      <div className="row mt-4">
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
  );
}

export default StartLearning;