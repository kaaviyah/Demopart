import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";

import "./Mainpage.css";
import InputDisplay from "./InputDisplay";
import TableDisplay from "./TableDisplay";

function Mainpage() {
  // let navigate=useNavigate();
  const[activeTab, setActiveTab]=useState('Form');
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    name: "",
    country: "",
    phonenumber: "",
  });
  const handleTabChange=(tab)=>{
    setActiveTab(tab);
  }
  const cap=(str)=>{
    return str.charAt(0).toUpperCase() +str.slice(1);
  }
  const handleChange = (evnt) => {

    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    // const newInput =evnt.target.value;
    // const cap=newInput.charAt(0).toUppercase()+evnt.target.value.slice(1);
    setformInputData(newInput);
  };
  console.log(formInputData);
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
);
    if (checkEmptyInput) {
      const capname=cap(formInputData.name);
      const capcon=cap(formInputData.country);
      formInputData.country=capcon
      formInputData.name=capname;
      const newData = (data) => [...data,formInputData];
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
            <li >
            <button id="butt" onClick={()=>handleTabChange('Form')}>Form</button></li>

            <li >
            <button id="butt" onClick={()=>handleTabChange('PhoneBook')}>PhoneBook</button></li>
          </ul>
        </div>
      </nav>
      {
        activeTab ==='Form'?<InputDisplay
        handleChange={handleChange}
        formInputData={formInputData}
        handleSubmit={handleSubmit}
      />:
      
      
       <TableDisplay tableData={tableData} /> 
      }
    </div>
  );
}
export default Mainpage;
