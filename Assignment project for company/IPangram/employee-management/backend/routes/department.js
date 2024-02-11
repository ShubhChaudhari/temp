// routes/department.js
const express = require('express');
const Department = require('../model/department');
const checkManagerRole = require('../middleware/chechManagerRole');
const router = express.Router();


router.post('/', checkManagerRole, async (req, res) => {
  const { name } = req.body;

  try {
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res.status(201).json({ message: 'Department created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Department creation failed' });
  }
});


router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch departments' });
  }
});


router.put('/:id', checkManagerRole, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ message: 'Department update failed' });
  }
});


router.delete('/:id', checkManagerRole, async (req, res) => {
  const { id } = req.params;

  try {
    await Department.findByIdAndDelete(id);
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Department deletion failed' });
  }
});

module.exports = router;
