import {React, useState } from "react";
import InputDisplay from "./InputDisplay";

import "./Mainpage.css";


function TableDisplay({tableData}) {
  return (
    <div>
      <table border={1} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((info, index) => {
            return (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.country}</td>
                <td>{info.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
              
    </div>
  );
}
export default TableDisplay;
