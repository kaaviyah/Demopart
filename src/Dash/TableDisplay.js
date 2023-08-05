import { React, useState } from "react";
import "./Mainpage.css";
function TableDisplay({ tableData, cap }) {
  const [rows, setRows] = useState(tableData);

  
  const editRow = (row) => {
    const updatedRows = rows.map((r) => {
      if (r === row) {
        return { ...r, editing: true };
      }

      return r;
    });
    setRows(updatedRows);
  };
  const saveRow = (row) => {
    const capname = cap(row.name);
      const capcon = cap(row.country);
      row.country = capcon;
      row.name = capname;
    const updatedRows = rows.map((r) => {
      if (r === row) {
        return { ...r, editing: false };
      }

      return r;
    });

    setRows(updatedRows);
  };
  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                {!row.editing && <td>{row.name}</td>}
                {!row.editing && <td>{row.country}</td>}
                {!row.editing && <td>{row.password}</td>}
                {row.editing && (
                  <td>
                    <input
                      className="editable"
                      type="text"
                      value={row.name}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].name = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                {row.editing && (
                  <td>
                    <input
                      type="text"
                      value={row.country}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].country = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                {row.editing && (
                  <td>
                    <input
                      type="tel"
                      value={row.password}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[index].password = e.target.value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                )}
                <td>
                  {!row.editing && (
                    <button className="btn2" onClick={() => editRow(row)}>
                      Edit
                    </button>
                  )}
                  { row.editing&&(
                 <button className="btn2" onClick={() => saveRow(row)}>
                 Save
               </button>
           ) }
                 <button className="btn3" onClick={() => deleteRow(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableDisplay;
