import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { createEmployee, updateEmployee } from "../../services/services";

const EmployeeFormDialog = ({ dialogOpen, setDialogOpen, employeeData }) => {
  const [empFormData, setEmpFormData] = useState({
    name: employeeData?.name || "",
    email: employeeData?.email || "",
    location: employeeData?.location || "",
  });

  const userRole = localStorage.getItem("userRole");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpFormData({ ...empFormData, [name]: value });
  };

  const onClose = () => {
    setDialogOpen(false);
  };
  const handleSubmit = async () => {
    try {
      if (employeeData?._id) {
        if (userRole === "manager") {
          const response = await updateEmployee(
            employeeData._id,
            empFormData,
            userRole
          );
          console.log('response', response)
        }
      } else {
        const response = await createEmployee(empFormData);
        console.log("response==>", response);
      }
    } catch (error) {
      console.log(error);
    }
    // onClose(); // Close dialog
  };

  return (
    <Dialog open={dialogOpen} onClose={onClose}>
      {employeeData ? (
        <DialogTitle>Edit Employee</DialogTitle>
      ) : (
        <DialogTitle>Add Employee</DialogTitle>
      )}

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={empFormData?.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={empFormData?.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="location"
          label="Location"
          type="text"
          fullWidth
          value={empFormData?.location}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {employeeData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeFormDialog;
