import React, { useState, useEffect } from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import "./style/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

function EmployeePage() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/EmployeeViewPage");
  }
  const handleChange = () => {
    setChecked(!checked);
  };
  const [data, setData] = useState([]);

  const options = [
    "Network Administrator",
    "Project Manager",
    "Network Engineer",
    "Application development",
    "Software Engineer",
  ];

  const [initialValues, setInitialValues] = useState({
    employeename: "",
    designation: "",
    isactive: "",
  });
  const onDesignationChangeHandler = (event) => {
    console.log(event);
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.warn(values);
  };
  var storedItems = JSON.parse(localStorage.getItem("formValues"));
  if (storedItems == null) {
    localStorage.setItem("formValues", JSON.stringify([]));
  }
  storedItems = JSON.parse(localStorage.getItem("formValues"));
  const [formValues, setFormValues] = useState(storedItems);
  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const ClearAllControls = () => {
    document.getElementById("create-employee-form").reset();
  };

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem("formValues");
      if (data) {
        setData(JSON.parse(data));
      }
    };

    loadData();
  }, []);
  return (
    <div className="EmpName formPadding">
      <form id="create-employee-form">
        <h1>Employee</h1>
        <Row>
          <label className="col-lg-6">Enter your name:</label>

          <input
            onChange={(e) =>
              setInitialValues({
                ...initialValues,
                employeename: e.target.value,
              })
            }
            //value={initialValues.employeename}
            className="col-lg-3"
            name="employeename"
            type="text"
          />
        </Row>
        <br />
        <Row>
          <label className="col-lg-6">Enter your Designation:</label>

          <select
            name="designation"
            className="col-lg-3"
            onChange={(e) =>
              setInitialValues({
                ...initialValues,
                designation: e.target.value,
              })
            }
          >
            <option>Please choose one option</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </Row>

        <br />
        <Row>
          <label className="col-lg-6">IsActive</label>

          <input
            name="isactive"
            //value={initialValues.isactive}
            onChange={(e) =>
              setInitialValues({
                ...initialValues,
                isactive: e.target.checked,
              })
            }
            className="col-lg-1 checkbox"
            style={{ width: "26px" }}
            type="checkbox"
          />
        </Row>
        <br />
        <Row>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <Button
            className="col-lg-2"
            id="btnSubmit"
            style={{ marginRight: "10px" }}
            onClick={submitForm}
          >
            Submit
          </Button>
          <Button className="col-lg-2" id="btnClear" onClick={ClearAllControls}>
            Clear
          </Button>

          <div className="col-lg-2"></div>
        </Row>
      </form>
      <div>
        <Button
          onClick={handleClick}
          className="bi bi-people"
          style={{ marginTop: "10px" }}
        >
          View Employees
        </Button>
      </div>
    </div>
  );
}
export default EmployeePage;
