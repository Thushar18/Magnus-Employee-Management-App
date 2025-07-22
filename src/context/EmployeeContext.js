// src/context/EmployeeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  // Load employees from localStorage on initial render
  const [employees, setEmployees] = useState(() => {
    try {
      const saved = localStorage.getItem('employees');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load employees from localStorage', e);
      return [];
    }
  });

  // Save to localStorage whenever employees change
  useEffect(() => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees));
    } catch (e) {
      console.error('Failed to save employees to localStorage', e);
    }
  }, [employees]);

  const addEmployee = (employeeData) => {
    const newEmployee = {
      id: Date.now(), // Simple unique ID
      ...employeeData,
      birthDate: employeeData.dob || '', // Map dob → birthDate
    };
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              ...updatedData,
              birthDate: updatedData.dob || emp.birthDate,
            }
          : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;