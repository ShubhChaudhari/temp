import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import QuestionList from './components/questions/QuestionList';
import SubmittedForm from './components/questions/SubmittedForm';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<QuestionList />} />
      <Route path="/submit" element={<SubmittedForm />} />
      </Routes>
    </Router>

  );
}

export default App;
