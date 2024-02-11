// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signup from './Components/signup/Signup';
import Login from './Components/login/Login';
import Department from './Components/department/Department';
import EmployeeList from './Components/employeeList/EmployeeList';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<EmployeeList />} />
        {/* <Route path="/department" element={<Department />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
      <ToastContainer />
    </>
  );
};

export default App;
