import React, { useState, useEffect } from "react";
import axios from "../api/api";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });

// ...existing code...
useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.response?.data || error.message);
      alert("Error fetching blogs: " + (error.response?.data?.error || error.message));
    }
  };
  fetchBlogs();
}, []);

const handleAddBlog = async () => {
  if (!newBlog.title || !newBlog.content) {
    alert("Please fill in both the title and content.");
    return;
  }
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("/blogs", newBlog, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBlogs([...blogs, response.data.blog]);
    setNewBlog({ title: "", content: "" });
    alert("Blog added successfully!");
  } catch (error) {
    console.error("Error adding blog:", error.response?.data || error.message);
    alert("Error adding blog: " + (error.response?.data?.error || error.message));
  }
};
// ...existing code...

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold">Manage Blogs</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="form-control mb-2"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Blog Content"
          className="form-control mb-2"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        ></textarea>
        <button className="btn btn-primary" onClick={handleAddBlog}>
          Add Blog
        </button>
      </div>
      <ul className="list-group">
        {blogs.map((blog) => (
          <li key={blog._id} className="list-group-item">
            <h5>{blog.title}</h5>
            <p>{blog.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageBlogs;