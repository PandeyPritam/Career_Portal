import React from "react";

function FeaturedIn() {
  const featuredCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center b-4 fw-bold">Featured In</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ gap: "30px" }}>
        {featuredCompanies.map((company, index) => (
          <div key={index} className="text-center">
            <img
              src={company.logo}
              alt={company.name}
              style={{ width: "100px", height: "auto", objectFit: "contain" }}
            />
            <p className="mt-2">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedIn;