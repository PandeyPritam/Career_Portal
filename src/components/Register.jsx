import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "../api/api"; // Ensure axios is imported
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Register() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user", // Default role set to "user"
  });
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    // Check if any field is empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setAlertMessage("All fields are required. Please fill out the form.");
      return;
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    setIsLoading(true); // Show loader

    try {
      console.log("Sending request to:", axios.defaults.baseURL + "/api/auth/register");
      const response = await axios.post("/auth/register", formData);
      console.log("Signup Response:", response.data);
      if (formData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard"); // Navigate to user dashboard
      }
      setAlertMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        setIsLoading(false); // Hide loader
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      setAlertMessage(error.response?.data?.error || "An error occurred during registration.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-start" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-primary mb-4">Register</h2>

        {/* Alert Message */}
        {alertMessage && (
          <div className="alert alert-danger" role="alert">
            {alertMessage}
          </div>
        )}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Col className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className={validated && !formData.firstName ? "is-invalid" : ""}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02" className="mt-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className={validated && !formData.lastName ? "is-invalid" : ""}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your last name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustomUsername" className="mt-3">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={validated && !formData.email ? "is-invalid" : ""}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationCustomPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={validated && !/^(?=.*[!@#$%^&*])/.test(formData.password) ? "is-invalid" : ""}
                />
                <Form.Control.Feedback type="invalid">
                  Password must contain at least one special character.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <Button type="submit" className="w-100" disabled={isLoading}>
            {isLoading ? (
              <span>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Registering...
              </span>
            ) : (
              "Submit form"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;