const express = require('express');
const formController = require('../controllers/form.controller');

const router = express.Router();

router.post('/', formController.addForm);
router.get('/', formController.getAllForms);
router.get('/:id', formController.getFormById);
router.patch('/:formId/questions', formController.updateForm);
router.delete('/:id', formController.deleteForm);

module.exports = router;