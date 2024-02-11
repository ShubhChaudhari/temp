import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./login/LogIn";
import SignUp from "./signup/SignUp";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<LogIn />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
