import React, { useState, useEffect } from "react";
import { Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  deleteEmployee,
  allEmployees,
  fetchEmployeesByLocation,
  fetchEmployeesByName,
  employee,
} from "../../services/services";
import { Button, Grid, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../header/Header";
import EmployeeFormDialog from "./EmployeeFormDialog";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const EmployeeList = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [filterType, setFilterType] = useState("name");
  const [order, setOrder] = useState("asc");

  const userRole = localStorage.getItem("userRole");

  const loadData = async () => {
    try {
      const response = await allEmployees();
      if (response.status === 200) {
        setEmployees(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setDialogOpen(true);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteEmployee(id, userRole);
      loadData();
    } catch (error) {}
  };
  const handleAdd = () => {
    setDialogOpen(true);
  };

  useEffect(() => {
    loadData();
  }, [dialogOpen]);

  // filter byName or Location
  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleApplyFilter = async () => {
    try {
      if (filterType === "name") {
        const response = await fetchEmployeesByName(order);
        if (response.data) {
          setEmployees(response.data);
        }
      } else if (filterType === "location") {
        const response = await fetchEmployeesByLocation(order);
        if (response.data) {
          setEmployees(response.data);
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <Header />

      <Grid container spacing={2} alignItems="center" padding={5}>
        <Grid item>
          <RadioGroup row value={filterType} onChange={handleFilterTypeChange}>
            <FormControlLabel
              value="name"
              control={<Radio />}
              label="Filter by Name"
            />
            <FormControlLabel
              value="location"
              control={<Radio />}
              label="Filter by Location"
            />
          </RadioGroup>
        </Grid>
        <Grid item>
          <RadioGroup row value={order} onChange={handleOrderChange}>
            <FormControlLabel
              value="asc"
              control={<Radio />}
              label="Ascending"
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Descending"
            />
          </RadioGroup>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleApplyFilter}>
            Apply Filter
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <h2>Employee List</h2>
        </Grid>
        <Grid item>
          <Button
            sx={{ marginRight: "5px" }}
            onClick={handleAdd}
            variant="contained"
            color="primary"
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        //   justifyContent="center"
        alignItems="center"
        sx={{ paddingBottom: 10 }}
      >
        <TableContainer sx={{ width: 700 }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                {userRole === "manager" && (
                  <StyledTableCell align="center">Action</StyledTableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <StyledTableRow key={employee.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {employee.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {employee.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {employee.location}
                  </StyledTableCell>
                  {userRole === "manager" && (
                    <StyledTableCell align="center">
                      <IconButton onClick={() => handleEdit(employee)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(employee._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {dialogOpen && (
        <EmployeeFormDialog
          employeeData={selectedEmployee}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      )}
    </>
  );
};

export default EmployeeList;
