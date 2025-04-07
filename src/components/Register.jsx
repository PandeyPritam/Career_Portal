  import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import axios from "../api/api"; // Ensure axios is imported
  import 'bootstrap/dist/css/bootstrap.min.css';

  function Register() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
    
      setValidated(true);
    
      try {
        console.log("Sending request to:", axios.defaults.baseURL + "/api/auth/register");
        const response = await axios.post("/auth/register", formData);
        console.log("Signup Response:", response.data);
        alert("Registration successful!");
        window.location.href = "/login";
      } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
        alert("Error: " + (error.response?.data?.error || error.message));
      }
    };
    

    return (
      <div className="container my-5 d-flex justify-content-center align-items-start" style={{ minHeight: "80vh" }}>
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <h2 className="text-primary mb-4">Register</h2>
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
                  className={validated && !formData.firstName ? 'is-invalid' : ''}
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
                  className={validated && !formData.lastName ? 'is-invalid' : ''}
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
                    className={validated && !formData.email ? 'is-invalid' : ''}
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
                    className={validated && !/^(?=.*[!@#$%^&*])/.test(formData.password) ? 'is-invalid' : ''}
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must contain at least one special character.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Form.Group className="mb-3 mt-4">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" className="w-100">Submit form</Button>
          </Form>
        </div>
      </div>
    );
  }

  export default Register;