import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";

import "./Mainpage.css";
import InputDisplay from "./InputDisplay";
import TableDisplay from "./TableDisplay";

function Mainpage() {
  // let navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("Form");
  const [tableData, setTableData] = useState([]);
  // const[editedIndex, setEditedIndex]=useState(-1);
  const [formInputData, setformInputData] = useState({
    name: "",
    country: "",
    phonenumber: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const cap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });

    setformInputData(newInput);
  };
  console.log(formInputData);
  const nameValidation = (name) => {
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;
    return nameRegex.test(name);
  };
  const phValidation = (phno) => {
    const phRegex = /^[2-9]{2}[0-9]{8}$/;
    return phRegex.test(phno);
  };
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    setError("");
    setSuccess("");
    if (!nameValidation(formInputData.name)) {
      return setError("Please enter valid Name");
    }
    if (!phValidation(formInputData.password )) {
      return setError("Please enter valid Phone");
    }
    setSuccess("Data Onboarded Successfully");
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const capname = cap(formInputData.name);
      const capcon = cap(formInputData.country);
      formInputData.country = capcon;
      formInputData.name = capname;
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { name: "", country: "", phonenumber: "" };
      setformInputData(emptyInput);
    }
  };
  console.log(tableData);
  const { username } = useParams();
  const location = useLocation();
  console.log(location.state.username);

  return (
    <div>
      <nav className="navbar">
        {/* <h1 className="text">Hello,{location.state.username}</h1> */}
        <h1 className="text">User Intellect</h1>

        <div className="container">
          <ul className="nav-link">
            <li>
              <button id="butt" onClick={() => handleTabChange("Form")}>
                Form
              </button>
            </li>

            <li>
              <button id="butt" onClick={() => handleTabChange("PhoneBook")}>
                PhoneBook
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {activeTab === "Form" ? (
        <InputDisplay
          handleChange={handleChange}
          formInputData={formInputData}
          handleSubmit={handleSubmit}
          error={error}
          success={success}
        />
      ) : (
        <TableDisplay tableData={tableData} cap={cap}  />
      )}
    </div>
  );
}
export default Mainpage;
