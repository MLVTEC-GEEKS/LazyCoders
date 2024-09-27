import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./component/Login/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        {<Route path="/" element={<LoginPage/>} />}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
