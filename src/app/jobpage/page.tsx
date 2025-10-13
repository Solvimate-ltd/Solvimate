import React from "react";
import "./styles.css";

const TableComponent: React.FC = () => {
  const rows = [
    { id: 1, type: "Type A", country: "India", language: "Hindi", statut: "Active" },
    { id: 2, type: "Type B", country: "USA", language: "English", statut: "Inactive" },
    { id: 3, type: "Type C", country: "France", language: "French", statut: "Active" },
    { id: 4, type: "Type D", country: "Germany", language: "German", statut: "Pending" },
    { id: 5, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 6, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 7, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 8, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 9, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 10, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 11, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 12, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 13, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 14, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 15, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 16, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 17, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 18, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
    { id: 19, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
     { id: 20, type: "Type E", country: "Japan", language: "Japanese", statut: "Active" },
  ];

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>TYPE</th>
            <th>COUNTRY</th>
            <th>LANGUAGE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.type}</td>
              <td>{row.country}</td>
              <td>{row.language}</td>
              <td>{row.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
