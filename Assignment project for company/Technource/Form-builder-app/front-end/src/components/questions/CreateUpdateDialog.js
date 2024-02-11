import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const CreateUpdateDialog = ({ open, onClose, questionData, handleSave, setQuestionData }) => {

    const handleInputChange = (field, value) => {
        const updatedQuestionData = { ...questionData, [field]: value };
        setQuestionData(updatedQuestionData);
      };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{'Add New Question'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Text"
          type="text"
          fullWidth
          value={questionData.text}
          onChange={(e) => handleInputChange("text", e.target.value)}
        />
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel id="questionType-label">Question Type</InputLabel>
          <Select
            labelId="questionType-label"
            value={questionData.type}
            label="Type"
            onChange={(e) => handleInputChange("type", e.target.value)}
          >
            <MenuItem value="Text">Text</MenuItem>
            <MenuItem value="Textarea">Textarea</MenuItem>
            <MenuItem value="Date">Date</MenuItem>
            <MenuItem value="Checkbox">Checkbox</MenuItem>
            <MenuItem value="RadioButton">RadioButton</MenuItem>
            <MenuItem value="File">File</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateUpdateDialog;
