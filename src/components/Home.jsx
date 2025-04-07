import React from "react";
import Herosection from "./Herosection";

function Home() {
  return (
    <>
    <div className="container my-5">
      <h1 className="text-center">Welcome to the Career Portal</h1>
      <p className="lead text-center">Your one-stop destination for career growth and opportunities.</p>
    </div>


        <div>
          <Herosection/>
          <div className="container my-5">
            <h2 className="text-center">Why Choose Career Portal?</h2>
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
        
        </>
  );
}

export default Home;