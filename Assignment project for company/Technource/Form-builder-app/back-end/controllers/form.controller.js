const Form = require("../models/form.model");

const addForm = async (req, res) => {
  const { name, questions } = req.body;

  try {
    let savedForm;
    if (questions && questions.length > 0) {
      const newForm = new Form({ name, questions });
      savedForm = await newForm.save();
    } else {
      const newForm = new Form({ name, questions: [] });
      savedForm = await newForm.save();
    }

    res.status(201).json(savedForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateForm = async (req, res) => {
  const { formId } = req.params;
  const { name, questions } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    if (name) {
      form.name = name;
    }

    if (questions && questions.length > 0) {
      form.questions = questions;
    }

    await form.save();
    res.status(200).json({ form });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
