const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');
const checkManagerRole = require('../middleware/chechManagerRole')


router.post('/', async (req, res) => {
  const { name, email, location } = req.body;

  try {
    const newEmployee = new Employee({ name, email, location });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Employee creation failed' });
  }
});


router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employee details' });
  }
});

// Update employee by ID (only accessible to managers)
router.patch('/:id',checkManagerRole, async (req, res) => {
  const { id } = req.params;
  const { name, email, location } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, email, location },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Employee update failed' });
  }
});

// Delete employee by ID (only accessible to managers)
router.delete('/:id',checkManagerRole, async (req, res) => {
  const { id } = req.params;

  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Employee deletion failed' });
  }
});


// Endpoint to get employees sorted by name

router.get('/sortedBy/Name', async (req, res) => {
  const { order } = req.query;
  
  try {
    let employees;

    if (order === 'asc') {
      employees = await Employee.find().sort({ name: 1 });
      return res.status(200).json({ data: employees, message: 'Filtered by name asending order' });
    } else if (order === 'desc') {
      employees = await Employee.find().sort({ name: -1 });
      return res.status(200).json({ data: employees, message: 'Filtered by name descending order' });
    } else {
      return res.status(400).json({ message: 'Invalid sorting order' });
    }

    // res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees sorted by name' });
  }
});

// Endpoint to get employees sorted by location 

router.get('/sortedBy/Location', async (req, res) => {
  const { order } = req.query;

  try {
    let employees;

    if (order === 'asc') {
      employees = await Employee.find().sort({ location: 1 });
      return res.status(200).json({ data: employees, message: 'Filtered by loaction asending order' });
    } else if (order === 'desc') {
      employees = await Employee.find().sort({ location: -1 });
      return res.status(200).json({ data: employees, message: 'Filtered by location descending order' });
    } else {
      return res.status(400).json({ message: 'Invalid sorting order' });
    }

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees sorted by location' });
  }
});

module.exports = router;
