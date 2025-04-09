import React from "react";

const Ourachivment = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center  mb-4  fw-bold">Our Achievements</h1> {/* Made bold */}
      <div className="stats shadow d-flex justify-content-around">
        <div className="stat place-items-center text-center">
          <div className="stat-icon mb-3">
            <i className="fas fa-download fa-3x text-primary"></i> {/* Downloads Icon */}
          </div>
          <div className="stat-title font-weight-bold">Placements</div> {/* Made bold */}
          <div className="stat-value font-weight-bold">31K</div> {/* Made bold */}
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center text-center">
          <div className="stat-icon mb-3">
            <i className="fas fa-users fa-3x text-secondary"></i> {/* Users Icon */}
          </div>
          <div className="stat-title font-weight-bold">Users</div> {/* Made bold */}
          <div className="stat-value text-secondary font-weight-bold">4,200</div> {/* Made bold */}
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center text-center">
          <div className="stat-icon mb-3">
            <i className="fas fa-user-plus fa-3x text-success"></i> {/* New Registers Icon */}
          </div>
          <div className="stat-title font-weight-bold">New Registers</div> {/* Made bold */}
          <div className="stat-value font-weight-bold">1,200</div> {/* Made bold */}
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Ourachivment;