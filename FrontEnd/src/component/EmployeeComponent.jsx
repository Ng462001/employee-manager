import React, { useState, useEffect } from 'react';
import '../style/employeeform.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EmployeeComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const username = 'admin';
  const password = 'admin';
  const authString = btoa(`${username}:${password}`);

  function pageTitle() {
    return <h4 className="title">{id ? 'Update Employees' : 'Add Employees'}</h4>;
  }

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${id}`, {
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            setError('Unauthorized: Invalid credentials.');
          } else if (err.response?.status === 403) {
            setError('Forbidden: You lack permission to view this employee.');
          } else if (err.response?.status === 404) {
            setError('Employee not found.');
          } else {
            setError('Failed to load employee data. Please try again.');
          }
          setLoading(false);
          console.error('Error fetching employee:', err);
        });
    }
  }, [id]);

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const saveEmployee = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const saveemployee = { firstName, lastName, email };
    const updatedemployee = { firstName, lastName, email,id };

    setLoading(true);
    try {
      if (id) {
        // Update employee
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/employees`, updatedemployee, {
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/json',
          },
        });
        alert('Employee updated successfully!');
      } else {
        // Add employee
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/employees`, saveemployee, {
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/json',
          },
        });
        alert('Employee added successfully!');
      }
      navigate('/');
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Unauthorized: Invalid credentials.');
      } else if (err.response?.status === 403) {
        setError('Forbidden: You lack permission to save this employee.');
      } else if (err.response?.status === 404) {
        setError('Employee not found.');
      } else if (err.response?.status === 405) {
        setError('Method not supported by the server. Please contact support.');
      } else {
        setError('Failed to save employee. Please try again.');
      }
      setLoading(false);
      console.error('Error saving employee:', err);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <div className="st-ba">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center card card-top">
          <div className="card-head">{pageTitle()}</div>
          <div className="card-body">
            <form onSubmit={saveEmployee}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Enter FirstName"
                  value={firstName}
                  className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="validationCustom01"
                  required
                />
                {formErrors.firstName && (
                  <div className="invalid-feedback">{formErrors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Enter LastName"
                  value={lastName}
                  className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {formErrors.lastName && (
                  <div className="invalid-feedback">{formErrors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {formErrors.email && (
                  <div className="invalid-feedback">{formErrors.email}</div>
                )}
              </div>
              <button className="btn btn-success" type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;