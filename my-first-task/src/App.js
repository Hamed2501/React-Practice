import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import EmployeeViewPage from "./pages/EmployeeViewPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);
  const person = {
    Name: "Hamed",
    emoji: "😇",
    seatNummbers: [1, 2, 8],
  };
  const employees = ["Hamed", "Sajed", "Khan", "Peter"];
  return (
    // <div className="App">
    //   <EmployeePage />
    // </div>
    <Router>
      <Routes>
        <Route path="/employeepage" element={<EmployeePage />} />
        <Route path="/employeeviewpage" element={<EmployeeViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
