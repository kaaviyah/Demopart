import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";

import "./Mainpage.css";
import InputDisplay from "./InputDisplay";
import TableDisplay from "./TableDisplay";

function Mainpage() {
  // let navigate=useNavigate();
  const[activeTab, setActiveTab]=useState('Title');
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    name: "",
    country: "",
    pass: "",
  });
  const handleTabChange=(tab)=>{
    setActiveTab(tab);
  }
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };
  console.log(formInputData);
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { name: "", country: "", password: "" };
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
        <h1 className="text">Hello,{location.state.username}</h1>

        <div className="container">
          <ul className="nav-link">
            <li >
            <button id="butt" onClick={()=>handleTabChange('Title')}>Title</button></li>

            <li >
            <button id="butt" onClick={()=>handleTabChange('Phone')}>Phone</button></li>
          </ul>
        </div>
      </nav>
      {
        activeTab ==='Title'?<InputDisplay
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
