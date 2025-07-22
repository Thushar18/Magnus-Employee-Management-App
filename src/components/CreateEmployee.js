import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEmployee.css';
import { EmployeeContext } from '../context/EmployeeContext';

const CreateEmployee = ({ onClose, editEmployee }) => {
  const navigate = useNavigate();
  const { addEmployee, updateEmployee } = useContext(EmployeeContext);

  // Ensure skills is always an array, even if editEmployee.skills is missing or invalid
  const initialSkills = Array.isArray(editEmployee?.skills) ? editEmployee.skills : [];

  const [formData, setFormData] = useState(() => ({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: 'M',
    address: '',
    countryId: '',
    cityId: '',
    otherCity: '',
    otherCityChecked: false,
    skills: [], // default empty array
    ...editEmployee, // spread edit data
    skills: initialSkills, // override with safe array
  }));

  const [cities, setCities] = useState([]);

  const countries = [
    { id: 5, name: 'Bangladesh' },
    { id: 6, name: 'Canada' },
    { id: 8, name: 'China' },
    { id: 7, name: 'France' },
    { id: 1, name: 'India' },
    { id: 9, name: 'Japan' },
    { id: 10, name: 'Nepal' },
    { id: 2, name: 'Sri Lanka' },
    { id: 4, name: 'UK' },
    { id: 3, name: 'USA' }
  ];

  const countryCity = {
    1: [{ id: 1, name: 'Ahmedabad' }, { id: 2, name: 'Bengaluru' }, { id: 3, name: 'Chennai' }, { id: 4, name: 'Delhi' }, { id: 5, name: 'Hyderabad' }],
    3: [{ id: 6, name: 'New York' }, { id: 7, name: 'Los Angeles' }, { id: 8, name: 'Chicago' }],
    4: [{ id: 9, name: 'London' }, { id: 10, name: 'Birmingham' }, { id: 11, name: 'Manchester' }],
    6: [{ id: 12, name: 'Toronto' }, { id: 13, name: 'Montreal' }, { id: 14, name: 'Vancouver' }],
    8: [{ id: 15, name: 'Beijing' }, { id: 16, name: 'Shanghai' }, { id: 17, name: 'Guangzhou' }],
    9: [{ id: 18, name: 'Tokyo' }, { id: 19, name: 'Yokohama' }, { id: 20, name: 'Osaka' }],
    7: [{ id: 21, name: 'Paris' }, { id: 22, name: 'Marseille' }, { id: 23, name: 'Lyon' }],
    5: [{ id: 24, name: 'Dhaka' }, { id: 25, name: 'Chittagong' }, { id: 26, name: 'Khulna' }],
    10: [{ id: 27, name: 'Kathmandu' }, { id: 28, name: 'Pokhara' }, { id: 29, name: 'Lalitpur' }],
    2: [{ id: 30, name: 'Colombo' }, { id: 31, name: 'Dehiwala-Mount Lavinia' }, { id: 32, name: 'Moratuwa' }]
  };

  const skills = [
    { id: 5, name: 'AWS' },
    { id: 3, name: 'DevOps' },
    { id: 2, name: 'Full Stack Developer' },
    { id: 4, name: 'Middleware' },
    { id: 1, name: 'QA-Automation' },
    { id: 6, name: 'WebServices' }
  ];

  // Load cities when country changes
  useEffect(() => {
    if (formData.countryId) {
      loadCity(formData.countryId);
    }
  }, [formData.countryId]);

  // Load initial city if editing
  useEffect(() => {
    if (editEmployee && editEmployee.countryId) {
      loadCity(editEmployee.countryId);
      // Only set cityId if it exists and isn't already handled
      if (editEmployee.cityId && !formData.otherCityChecked) {
        setFormData(prev => ({ ...prev, cityId: String(editEmployee.cityId) }));
      }
    }
  }, [editEmployee]);

  const loadCity = (countryId) => {
    const parsedId = parseInt(countryId);
    const cityList = countryCity[parsedId] || [];
    setCities(cityList);

    // Reset cityId safely
    setFormData(prev => ({
      ...prev,
      cityId: cityList.length > 0 ? prev.cityId || '' : ''
    }));
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name === 'countryId') {
      setFormData(prev => ({ ...prev, countryId: value }));
      loadCity(value);
    } else if (name === 'otherCityChecked') {
      setFormData(prev => ({
        ...prev,
        otherCityChecked: checked,
        cityId: checked ? '0' : prev.cityId // clear city selection when "Other" is checked
      }));
    } else if (name.startsWith('chkSkill_')) {
      const skillId = parseInt(value);
      setFormData(prev => {
        const currentSkills = Array.isArray(prev.skills) ? prev.skills : [];
        return {
          ...prev,
          skills: checked
            ? [...currentSkills, skillId]
            : currentSkills.filter(id => id !== skillId)
        };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateEmployee = () => {
    if (formData.otherCityChecked && !formData.otherCity.trim()) {
      alert('Please enter other city name.');
      return false;
    }
    if (!formData.firstName.trim()) {
      alert('Please enter first name.');
      return false;
    }
    if (!formData.lastName.trim()) {
      alert('Please enter last name.');
      return false;
    }
    if (!formData.email.trim()) {
      alert('Please enter email.');
      return false;
    }
    if (!formData.mobile.trim()) {
      alert('Please enter mobile number.');
      return false;
    }
    return true;
  };

  const saveEmployee = () => {
    if (!validateEmployee()) return;

    const selectedCountryName = countries.find(c => c.id == formData.countryId)?.name || '';
    const selectedCityName = formData.otherCityChecked
      ? formData.otherCity
      : cities.find(c => c.id == formData.cityId)?.name || '';

    // Safely map skill IDs to names
    const selectedSkillNames = Array.isArray(formData.skills)
      ? skills
          .filter(skill => formData.skills.includes(skill.id))
          .map(skill => skill.name)
      : [];

    const employeeData = {
      ...formData,
      country: selectedCountryName,
      city: selectedCityName,
      skills: selectedSkillNames
    };

    if (editEmployee) {
      updateEmployee(editEmployee.id, employeeData);
      alert('✅ Employee Updated Successfully!');
    } else {
      addEmployee(employeeData);
      alert('✅ Employee Created Successfully!');
    }

    // Reset form only for new employees
    if (!editEmployee) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        dob: '',
        gender: 'M',
        address: '',
        countryId: '',
        cityId: '',
        otherCity: '',
        otherCityChecked: false,
        skills: [],
      });
    }

    // Close modal or navigate back
    if (onClose) {
      onClose();
    } else {
      navigate('/search-employee');
    }
  };

  const onlyDigits = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(e.key) && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="create-employee">
      {/* Page Header */}
      <div className="page-header">
        <h2>Employee</h2>
        <p className="page-subtitle">{editEmployee ? 'Edit' : 'Create'}</p>
      </div>

      {/* Form Card */}
      <div className="form-card">
        <div className="form-header">
          <h3>Employee Details</h3>
        </div>
        <div className="form-body">
          <div className="form-row">
            {/* First Name */}
            <div className="form-group">
              <label><span className="required">*</span> First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                maxLength="20"
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label><span className="required">*</span> Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                maxLength="20"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label><span className="required">*</span> Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id"
              />
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label><span className="required">*</span> Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onKeyDown={onlyDigits}
                placeholder="Mobile No"
                maxLength="10"
              />
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>
              <div className="form-radio-group">
                <label><input type="radio" name="gender" value="M" checked={formData.gender === 'M'} onChange={handleChange} /> Male</label>
                <label><input type="radio" name="gender" value="F" checked={formData.gender === 'F'} onChange={handleChange} /> Female</label>
              </div>
            </div>

            {/* Address */}
            <div className="form-group full">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                rows="3"
              />
            </div>

            {/* Country */}
            <div className="form-group">
              <label>Country</label>
              <select name="countryId" value={formData.countryId} onChange={handleChange}>
                <option value="">--Select Country--</option>
                {countries.map(country => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="form-group">
              <label>City</label>
              <select
                name="cityId"
                value={formData.cityId}
                onChange={handleChange}
                disabled={formData.otherCityChecked}
                style={{ backgroundColor: formData.otherCityChecked ? '#f9f9f9' : '#fff' }}
              >
                <option value="">--Select City--</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>

            {/* Other City Checkbox */}
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="otherCityChecked"
                  checked={formData.otherCityChecked}
                  onChange={handleChange}
                />
                Other City
              </label>
            </div>

            {/* Other City Input */}
            {formData.otherCityChecked && (
              <div className="form-group">
                <label><span className="required">*</span> Other City</label>
                <input
                  type="text"
                  name="otherCity"
                  value={formData.otherCity}
                  onChange={handleChange}
                  placeholder="City Name"
                  maxLength="20"
                />
              </div>
            )}

            {/* Skills */}
            <div className="form-group full">
              <label>Skills</label>
              <div className="skills-grid">
                {skills.map(skill => (
                  <label key={skill.id}>
                    <input
                      type="checkbox"
                      name={`chkSkill_${skill.id}`}
                      value={skill.id}
                      checked={Array.isArray(formData.skills) && formData.skills.includes(skill.id)}
                      onChange={handleChange}
                    />
                    {skill.name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="form-footer">
          <button className="btn btn-success" onClick={saveEmployee}>Save</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              if (onClose) onClose();
              else navigate('/search-employee');
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;