const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true }, // Example: 'radio', 'checkbox'
  options: [{ type: String }], // For radio/checkbox options
});

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: [questionSchema],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;