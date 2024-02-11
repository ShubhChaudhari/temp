import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateUpdateDialog from "./CreateUpdateDialog";
import {
  getAllForms,
  addForm,
  updateForm,
  deleteForm,
  getForm,
} from "../../services/FormServices";

const initialValue = [
  {
    text: "SKMDKDM",
    type: "Text",
    options: [],
  },
  {
    text: "KMDKDNKD",
    type: "Checkbox",
    options: [],
  },
];

const QuestionList = () => {
  const [questions, setQuestions] = useState(initialValue);
  const [openDialog, setOpenDialog] = useState(false);
  const [questionData, setQuestionData] = useState([]);
  const [userInputs, setUserInputs] = useState([]);


  const handleInputChange = (index, value) => {
    setUserInputs((prevUserInputs) => ({
      ...prevUserInputs,
      [index]: value,
    }));
  };
  console.log("user input changed", userInputs);

  const handleAdd = () => {
    setOpenDialog(true);
  };

  const handleSave = async () => {
    try {
      const newQuestion = {
        text: questionData.text, 
        type: questionData.type, 
        options: questionData.options || [],
      };
  
      // Append the newQuestion to the questions state
      setQuestions([...questions, newQuestion]);
      setOpenDialog(false);
      setQuestionData(initialValue);
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  const handleSubmit = async() => {
    const formData = {
      name: "New Form",
      questions: questions.map((question,index) => ({
        text: question.text,
        type: question.type,
        options: userInputs[index] || [],
        // userInput: question.userInput, // Include the userInput field
      })),
    };
    const res = await addForm(formData);
    console.log("formData", formData);
    console.log(res);
  };
  console.log('question', questions)

  const handleDelete = async (id) => {
    try {
      const res = await deleteForm(id);
    } catch (error) {
      console.error("Error deleting Form:", error);
    }
  };

  const renderQuestionBasedOnType = (question, index) => {
    switch (question.type) {
      case "Text":
        return (
          <>
            <Typography variant="h6">{question.text}</Typography>{" "}
            
            <TextField onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </>
        );
      case "Textarea":
        return (
          <>
            <Typography variant="h6">{question.text}</Typography>{" "}
            <TextField multiline />
          </>
        );
      case "Date":
        return (
          <>
            <Typography variant="h6">{question.text}</Typography>{" "}
            <TextField type="date" />
          </>
        );
      case "Checkbox":
        return (
          <FormControl component="fieldset">
            <Typography>{question.text}</Typography>
            <FormGroup>
              {/* {question.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={option}
                />
              ))} */}
              <FormControlLabel control={<Checkbox />} label={1} />
              <FormControlLabel control={<Checkbox />} label={2} />
              <FormControlLabel control={<Checkbox />} label={3} />
              <FormControlLabel control={<Checkbox />} label={4} />
            </FormGroup>
          </FormControl>
        );
      case "RadioButton":
        return (
          <FormControl component="fieldset">
            <Typography variant="h6">{question.text}</Typography>{" "}
            <RadioGroup>
              <FormControlLabel
                // value={option}
                control={<Radio />}
              />
              <FormControlLabel
                value={"yes"}
                control={<Radio />}
                label={"Yes"}
              />
              <FormControlLabel value={"no"} control={<Radio />} label={"No"} />
            </RadioGroup>
          </FormControl>
        );
      case "UploadFile":
        return (
          <>
            <Typography variant="h6">{question.text}</Typography>{" "}
            <input type="file" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Question List
      </Typography>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
        Add New Question
      </Button>

      <List>
        {questions.map((question,index) => (
          <Paper key={index} elevation={3} style={{ margin: "12px 0" }}>
            <ListItem>
              <Box width="100%">{renderQuestionBasedOnType(question, index)}</Box>
              {/* Other Actions */}
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(question._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))}
      </List>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <CreateUpdateDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        questionData={questionData}
        setQuestionData={setQuestionData}
        handleSave={handleSave}
      />
    </Box>
  );
};

export default QuestionList;
