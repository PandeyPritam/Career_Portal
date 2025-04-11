import React, { useEffect, useState } from "react";
import axios from "../api/api";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No token found. Please log in again.");
          return;
        }
        const response = await axios.get("/admin/courses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error.response?.data || error.message);
        alert("Error fetching courses: " + (error.response?.data?.error || error.message));
      }
    };
    fetchCourses();
  }, []);

  // Add a new course
  const handleAddCourse = async () => {
    if (!newCourse.title || !newCourse.description) {
      alert("Please fill in both the title and description.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/admin/courses", newCourse, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses([...courses, response.data.course]);
      setNewCourse({ title: "", description: "" });
      alert("Course added successfully!");
    } catch (error) {
      console.error("Error adding course:", error.response?.data || error.message);
      alert("Error adding course: " + (error.response?.data?.error || error.message));
    }
  };

  // Delete a course
  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/admin/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(courses.filter((course) => course._id !== id));
      alert("Course deleted successfully!");
    } catch (error) {
      console.error("Error deleting course:", error.response?.data || error.message);
      alert("Error deleting course: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Manage Courses</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Course Title"
          className="form-control mb-2"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <textarea
          placeholder="Course Description"
          className="form-control mb-2"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        ></textarea>
        <button className="btn btn-primary" onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteCourse(course._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCourses;