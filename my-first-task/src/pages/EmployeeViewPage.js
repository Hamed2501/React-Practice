import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
function EmployeeViewPage() {
  debugger;
  const navigate = useNavigate();

  function handleClick() {
    navigate("/EmployeePage");
  }
  const storedItems = JSON.parse(localStorage.getItem("formValues"));
  const [data, setData] = useState(storedItems);
  console.log(storedItems);
  //   useEffect(() => {
  //     const loadData = () => {
  //       debugger;
  //       const data = localStorage.getItem("formValues");
  //       if (data) {
  //         setData(JSON.parse(data));
  //       }
  //     };

  //     loadData();
  //   }, []);

  return (
    <div>
      {/* <input items={data} setItems={setData} /> */}
      <table className="col-lg-6" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>EmployeeName</th>
            <th>Designation</th>
            <th>IsActive</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.employeename}>
              <td>{item.employeename}</td>
              <td>{item.designation}</td>
              <td>{item.isactive.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleClick}>Add Employees</Button>
    </div>
  );
}

export default EmployeeViewPage;
