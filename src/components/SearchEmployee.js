import { useState, useContext } from 'react';
import './SearchEmployee.css';
import { EmployeeContext } from '../context/EmployeeContext';
import CreateEmployee from './CreateEmployee';

const SearchEmployee = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const [searchName, setSearchName] = useState('');
  const [searchMobile, setSearchMobile] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleView = (emp) => {
    setSelectedEmployee(emp);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setShowCreateForm(true);
  };

  const handleDelete = (emp) => {
    if (window.confirm(`Are you sure you want to delete ${emp.firstName} ${emp.lastName}?`)) {
      deleteEmployee(emp.id);
      alert(`${emp.firstName} ${emp.lastName} has been deleted successfully.`);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.firstName.toLowerCase().includes(searchName.toLowerCase()) &&
    emp.mobile.toLowerCase().includes(searchMobile.toLowerCase())
  );

  if (showCreateForm) {
    return (
      <CreateEmployee
        onClose={() => {
          setShowCreateForm(false);
          setEditEmployee(null);
        }}
        editEmployee={editEmployee}
      />
    );
  }

  // Helper: Get emoji from gender ('M'/'F')
  const getGenderEmoji = (gender) => {
    return gender === 'M' ? '👨' : gender === 'F' ? '👩' : '❓';
  };

  // Helper: Get full gender text
  const getGenderText = (gender) => {
    return gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : 'Not specified';
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2>Employee</h2>
          <p>Search ({filteredEmployees.length} employees found)</p>
        </div>
        <button className="add-btn" onClick={() => setShowCreateForm(true)}>
          Add Employee
        </button>
      </div>

      {/* Search Form */}
      <div className="search-card">
        <h3>Search Employee</h3>
        <div className="search-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Employee Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="text"
              placeholder="Mobile No"
              value={searchMobile}
              onChange={(e) => setSearchMobile(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-success">Search</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setSearchName('');
                setSearchMobile('');
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile No</th>
              <th>Email Id</th>
              <th>Gender</th>
              <th>Birth Date</th>
              <th>Country</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.mobile}</td>
                  <td>{emp.email}</td>
                  <td>{getGenderEmoji(emp.gender)} {getGenderText(emp.gender)}</td>
                  <td>{emp.birthDate}</td>
                  <td>{emp.country}</td>
                  <td>{emp.city || 'N/A'}</td>
                  <td>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'nowrap'
                    }}>
                      <button className="action-btn view" onClick={() => handleView(emp)}>View</button>
                      <button className="action-btn edit" onClick={() => handleEdit(emp)}>Edit</button>
                      <button className="action-btn delete" onClick={() => handleDelete(emp)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-results">
                  No employees found. Try adjusting your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-cards">
        {filteredEmployees.map((emp) => (
          <div key={emp.id} className="card">
            <div className="card-header">
              <h4>{emp.firstName} {emp.lastName}</h4>
              <span>{getGenderEmoji(emp.gender)}</span>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Mobile:</strong> {emp.mobile}</p>
              <p><strong>Birth Date:</strong> {emp.birthDate}</p>
              <p><strong>Country:</strong> {emp.country}</p>
              <p><strong>City:</strong> {emp.city || 'N/A'}</p>
              <p><strong>Gender:</strong> {getGenderText(emp.gender)}</p>
            </div>
            <div className="card-actions">
              <button onClick={() => handleView(emp)}>View</button>
              <button onClick={() => handleEdit(emp)}>Edit</button>
              <button onClick={() => handleDelete(emp)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredEmployees.length === 0 && (
        <div className="no-results-full">
          <h4>No employees found</h4>
          <p>Try adjusting your search criteria or add a new employee.</p>
        </div>
      )}

      {/* Modal */}
      {showModal && selectedEmployee && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Employee Details</h3>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            <div className="modal-body">
              <div className="modal-avatar">{getGenderEmoji(selectedEmployee.gender)}</div>
              <p><strong>Full Name:</strong> {selectedEmployee.firstName} {selectedEmployee.lastName}</p>
              <p><strong>Email:</strong> {selectedEmployee.email}</p>
              <p><strong>Mobile:</strong> {selectedEmployee.mobile}</p>
              <p><strong>Gender:</strong> {getGenderText(selectedEmployee.gender)}</p>
              <p><strong>Birth Date:</strong> {selectedEmployee.birthDate}</p>
              <p><strong>Country:</strong> {selectedEmployee.country}</p>
              <p><strong>City:</strong> {selectedEmployee.city || 'N/A'}</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-edit"
                onClick={() => {
                  handleCloseModal();
                  handleEdit(selectedEmployee);
                }}
              >
                Edit
              </button>
              <button className="btn btn-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchEmployee;