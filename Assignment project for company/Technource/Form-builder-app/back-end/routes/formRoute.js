const express = require("express");
const router = express.Router();
const Form = require("../models/form.model");

//
// router.post('/forms', async (req, res) => {
//     const { name } = req.body;

//     try {
//       const newForm = await Form.create({ name, questions: [] });
//       res.status(201).json({ formId: newForm._id });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });

router.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new question
router.post("/forms/:formId/questions", async (req, res) => {
  const { formId } = req.params;
  const { text, type, options } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    const newQuestion = { text, type, options };
    form.questions.push(newQuestion);
    await form.save();

    res.status(201).json({ question: newQuestion });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.post('/forms', async (req, res) => {
//   const { name, question } = req.body;

//   try {
//     let formId;
//     if (question) {
//       // If a question is provided, create a form and add the question to it
//       const newForm = await Form.create({ name, questions: [...question] });
//       formId = newForm._id;
//     } else {
//       // If no question is provided, only create a new form
//       const newForm = await Form.create({ name, questions: [] });
//       formId = newForm._id;
//     }

//     res.status(201).json({ formId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/forms", async (req, res) => {
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
});

router.patch('/forms/:formId', async (req, res) => {
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
});

router.patch('/forms/:formId/questions/:questionId', async (req, res) => {
  const { formId, questionId } = req.params;
  const { text, type, options } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    const questionToUpdate = form.questions.id(questionId);
    if (!questionToUpdate) {
      return res.status(404).json({ error: 'Question not found' });
    }

    if (text) {
      questionToUpdate.text = text;
    }
    if (type) {
      questionToUpdate.type = type;
    }
    if (options) {
      questionToUpdate.options = options;
    }

    await form.save();
    res.status(200).json({ form });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.patch('/forms/:formId/questions', async (req, res) => {
  const { formId } = req.params;
  const { questions } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
console.log('questions', questions)
    if (!questions || !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid questions array' });
    }

    questions.forEach((updatedQuestion) => {
      const questionToUpdate = form.questions.id(updatedQuestion._id);
      if (questionToUpdate) {
        if (updatedQuestion.text) {
          questionToUpdate.text = updatedQuestion.text;
        }
        if (updatedQuestion.type) {
          questionToUpdate.type = updatedQuestion.type;
        }
        if (updatedQuestion.options) {
          questionToUpdate.options = updatedQuestion.options;
        }
      }
    });

    await form.save();
    res.status(200).json({ form });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
