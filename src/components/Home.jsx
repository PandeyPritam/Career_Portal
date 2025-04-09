import React from "react";
import Herosection from "./Herosection";
import Ourachivment from "./Ourachivment";
import Feedback from "./Feedback";
import FeaturedIn from "./FeatureIn";

function Home() {
  return (
    <>
      <div
        className="hero bg-base-200"
        style={{
          minHeight: "80vh", // Reduce the height
          paddingTop: "20px", // Reduce the margin from the top
          paddingBottom: "20px", // Add padding to balance the layout
        }}
      >
        <div
          className="hero-content flex-col lg:flex-row-reverse"
          style={{
            gap: "20px", // Add spacing between the image and text
            alignItems: "center", // Center-align content vertically
          }}
        >
          <img
            src="https://oecdedutoday.com/wp-content/uploads/2021/10/Career-readiness-project-findings-blog.png"
            className="max-w-sm rounded-lg"
            style={{
              maxWidth: "400px",
              height: "400px", 
              objectFit: "cover"
            }}
          />
          <div>
            <h1
              className="text-9xl  fw-bold"
              style={{ color: "red" }} // Set the color to orange
            >
              Welcome to Career Portal !!<br />
              <span className="font-bold animated-span mt-12"> Your Gateway to Success!</span>
            </h1>
            <p className="py-6 text-lg">
              Find Your Dream Job, Explore Opportunities, and Build Your Future!
              At Career Portal, we connect job seekers with the best opportunities in the industry. Whether you're a fresh graduate or an experienced professional, our platform provides job listings, career advice, resume-building tools, and networking opportunities to help you succeed.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div>
        <Herosection />
        <div className="container my-5">
          <h2 className="text-center fw-bold">Why Choose Career Portal?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Expert Mentors</h5>
                  <p className="card-text">Learn from industry leaders and experts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Top Courses</h5>
                  <p className="card-text">Access a wide range of courses tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Career Opportunities</h5>
                  <p className="card-text">Get connected with top companies and recruiters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ourachivment/>
      <Feedback />
      <FeaturedIn />


      

    </>
  );
}

export default Home;