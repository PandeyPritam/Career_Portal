import React from "react";
import Herosection from "./Herosection";
import Ourachivment from "./Ourachivment";
import Feedback from "./Feedback";
import FeaturedIn from "./FeatureIn";
import { useEffect, useState } from "react";
import axios from "../api/api"; // Adjust the import path as necessary

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/blogs");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error.response?.data || error.message);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero bg-base-200"
        style={{
          minHeight: "80vh",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="hero-content flex-col lg:flex-row-reverse"
          style={{
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src="https://oecdedutoday.com/wp-content/uploads/2021/10/Career-readiness-project-findings-blog.png"
            className="max-w-sm rounded-lg"
            style={{
              maxWidth: "400px",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <div>
            <h1
              className="text-9xl fw-bold"
              style={{ color: "red" }}
            >
              Welcome to Career Portal !!<br />
              <span className="font-bold animated-span mt-12">
                Your Gateway to Success!
              </span>
            </h1>
            <p className="py-6 text-lg">
              Find Your Dream Job, Explore Opportunities, and Build Your Future!
              At Career Portal, we connect job seekers with the best opportunities in the industry. Whether you're a fresh graduate or an experienced professional, our platform provides job listings, career advice, resume-building tools, and networking opportunities to help you succeed.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Herosection />
      <div id="achievements">
        <Ourachivment />
      </div>
      <div id="featured">
        <Feedback />
      </div>
      <div>
        <FeaturedIn />
      </div>


      {/* Blog Section */}
      <div className="container my-5">
      <h2 className="text-center fw-bold">Latest Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(blog.content)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;