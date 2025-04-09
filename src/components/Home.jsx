import React from "react";
import Herosection from "./Herosection";
import Ourachivment from "./Ourachivment";
import Feedback from "./Feedback";
import FeaturedIn from "./FeatureIn";

function Home() {
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

      {/* Achievements Section */}
      <div id="achievements">
        <Ourachivment />
      </div>

      {/* Feedback Section */}
      <div id="featured">
        <Feedback />
      </div>

      {/* Featured Section */}
      <div>
        <FeaturedIn />
      </div>

      {/* Blog Section */}
      <div id="blog" className="container my-5">
        <h2 className="text-center fw-bold">Our Blog</h2>
        <p className="text-center">
          Stay updated with the latest career tips, industry trends, and success stories.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">How to Ace Your Next Interview</h5>
                <p className="card-text">
                  Learn the best tips and tricks to impress your interviewer and land your dream job.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Top 10 Skills in Demand</h5>
                <p className="card-text">
                  Discover the skills that employers are looking for in 2025 and beyond.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Building a Winning Resume</h5>
                <p className="card-text">
                  Learn how to create a resume that stands out and gets noticed by recruiters.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;