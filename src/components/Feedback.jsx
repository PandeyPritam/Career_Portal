import React, { useState } from "react";

function Feedback() {
    const feedbacks = [
        {
            name: "John Doe",
            profile: "Software Engineer at Google",
            description: "Career Portal helped me land my dream job at Google. The courses and mentors were incredibly helpful!",
            image: "https://media.istockphoto.com/id/1473508665/photo/administration-teamwork-office-documents-or-people-review-financial-data-finance-funding-or.jpg?s=612x612&w=0&k=20&c=lTWcpsCfm8y0cpMcjxMuRPYU4par8EGc5w9ArU3_L9Y=",
        },
        {
            name: "Jane Smith",
            profile: "Data Scientist at Amazon",
            description: "The resources and guidance provided by Career Portal were top-notch. I highly recommend it!",
            image: "https://media.istockphoto.com/id/1495361471/photo/documents-laptop-and-business-women-in-meeting-at-night-for-proposal-analysis-and-planning-in.jpg?s=612x612&w=0&k=20&c=7TdKWQjMnVR38p4cor61rqgE7k6hrGWyMxf3XfwbD0g=",
        },
        {
            name: "Michael Johnson",
            profile: "Product Manager at Microsoft",
            description: "Career Portal's resume-building tools and job listings were instrumental in my career growth.",
            image: "https://media.istockphoto.com/id/1416554247/photo/smart-business-people-working-with-plans-while-talking-of-their-new-design-business-in-the.jpg?s=612x612&w=0&k=20&c=gWHzn7n790eYVXVLIbsHaj2FE_I7JB3XtYoKIDX0Hh8=",
        },
        {
            name: "Emily Davis",
            profile: "UX Designer at Facebook",
            description: "The mentorship and career advice I received from Career Portal were invaluable. Highly recommended!",
            image: "https://media.istockphoto.com/id/1436384092/video/business-meeting-consulting-or-woman-recruitment-leader-coaching-employee-or-corporate-worker.jpg?s=640x640&k=20&c=t45TxncEax7xUrz9ltefrZ3jUkgN2XEvdrjstxSTupo=",
        },
        {
            name: "Chris Brown",
            profile: "DevOps Engineer at Netflix",
            description: "Career Portal's resources helped me transition into a new role seamlessly. Thank you!",
            image: " https://media.istockphoto.com/id/1356386941/photo/mature-man-looking-at-a-digital-tablet-that-a-colleague-is-showing-at-work.jpg?s=612x612&w=0&k=20&c=EQX9lSvl9cZsa6Ff4JrYtlyDLJwijWZfo84GC9C7otc=",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.ceil(feedbacks.length / 3) - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Math.ceil(feedbacks.length / 3) - 1 ? 0 : prevIndex + 1
        );
    };

    const getVisibleFeedbacks = () => {
        const startIndex = currentIndex * 3;
        return feedbacks.slice(startIndex, startIndex + 3);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 fw-bold">Hear It Directly From Our Users</h1> {/* Made bold */}
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-outline-primary" onClick={handlePrev}>
                    <i className="fas fa-arrow-left"></i> Previous
                </button>
                <div className="d-flex justify-content-center" style={{ gap: "20px" }}>
                    {getVisibleFeedbacks().map((feedback, index) => (
                        <div
                            className="card"
                            key={index}
                            style={{
                                width: "300px",
                                height: "300px",
                                border: "none",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <div className="card-body text-center">
                                <img
                                    src={feedback.image}
                                    alt={feedback.name}
                                    className="rounded-circle mb-3"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <h5 className="card-title fw-bold">{feedback.name}</h5>
                                <p className="text-muted">{feedback.profile}</p>
                                <p className="card-text" style={{ fontSize: "0.9rem" }}>
                                    {feedback.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-outline-primary" onClick={handleNext}>
                    Next <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );

}

export default Feedback;