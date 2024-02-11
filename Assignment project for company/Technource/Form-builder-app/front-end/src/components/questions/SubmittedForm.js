import React, { useEffect, useState } from "react";
import { getForm } from "../../services/FormServices";
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

const SubmittedForm = () => {
  const [form, setForm] = useState([]);

  const getFormDetail = async (id) => {
    try {
      const response = await getForm(id);
      setForm(response);
      console.log("response", response);
    } catch (error) {
      console.error("Error deleting Form:", error);
    }
  };

  useEffect(() => {
    getFormDetail();
  }, []);

  const renderQuestionBasedOnType = (question, index) => {
    switch (question.type) {
      case "Text":
        return (
          <>
            <Typography variant="h6">{question.text}</Typography>{" "}
            <TextField
            //   onChange={(e) => handleInputChange(index, e.target.value)}
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
    <List>
      {form.map((question, index) => (
        <Paper key={index} elevation={3} style={{ margin: "12px 0" }}>
          <ListItem>
            <Box width="100%">{renderQuestionBasedOnType(question, index)}</Box>
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default SubmittedForm;
