import { promiseToCallback } from "@azure/core-http";
import {React, useState } from "react";
import InputDisplay from "./InputDisplay";

import "./Mainpage.css";


function TableDisplay({tableData, onDelete}) {
  const [data, setData]=useState(tableData);
  const [editableRowId, setEditableRowId]=useState(null);
  const handleEdit=(id)=>{
    setEditableRowId(id);
  };
  const handleSave=(id, updatedData)=>{
setData((prevData)=>prevData.filter((row)=>(row.id==id?{...row.id !==id}:row))
);
setEditableRowId(null);
  }
  return (
    <div className="container">
      <table  >
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id} onClick={()=>handleEdit(row.id)}>
                <td>
                  {
                    editableRowId===  row.id ?<input value={row.name}/>:
                    row.name
                  }</td>
                   <td>
                  {
                    editableRowId===  row.id ?<input value={row.country}/>:
                    row.country
                  }</td>
                    <td>
                  {
                    editableRowId===  row.id ?<input value={row.name}/>:
                    row.name
                  }</td>
                   <td>
                  {
                    editableRowId===  row.id ?
                    (
                    <>
                    <button className="btn2"  onClick={()=>handleSave(row.id,{name:'',country:'',password:''})}>Save</button>
                    
                   
                    </> ):(
                      <>
                      <button className="btn2" onClick={()=>handleEdit(row.id)} >Update</button>
                      <button className="btn3" onClick={()=>onDelete(row.id)} >Delete</button>
                      </>
                    )
                  }
                  </td>

                  
                  {/* {info.name}</td> */}
                {/* <td>{info.country}</td>
                <td>{info.password}</td> */}
                {/* <td>
                  <button className="btn2" onClick={()=>handleEdit(row.id)} >Update</button>
                  <button className="btn3" onClick={()=>onDelete(row.id)} >Delete</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      
     
        </div>
     
  );
}
export default TableDisplay;
