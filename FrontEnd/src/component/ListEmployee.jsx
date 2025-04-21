import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function ListEmployee() {
  
  const username = 'admin';
  const password = 'admin';
  const authString = btoa(`${username}:${password}`);

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/employees`, {
          headers: {
            Authorization: `Basic ${authString}`,
            'Content-Type': 'application/json',
          },
        });
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load employees. Please try again.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${id}`, {
        headers: {
          Authorization: `Basic ${authString}`, // Add auth header
          'Content-Type': 'application/json',
        },
      });
      setEmployees(employees.filter((item) => item.id !== id));
      alert('Employee deleted successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to delete employee. Please try again.');
    }
  }

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (employees.length === 0) return <div className="text-center mt-5">No employees found.</div>;

  return (
    <div className="container">
      <h3 className="text-center mt-3">List of Employees</h3>
      <NavLink className="btn btn-danger mb-2" to="/add-employee">
        Add Employee
      </NavLink>
      <table className="table table-success table-striped table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => (
            <tr key={item.id} className="text-center">
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <NavLink className="btn btn-success" to={`/update-employee/${item.id}`}>
                  Update
                </NavLink>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;