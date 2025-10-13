'use client'
import React, { useState } from "react";
import "./styles.css";

const TwoTables: React.FC = () => {
    const [showCandidateForm, setShowCandidateForm] = useState(false);
    const [showVendorForm, setShowVendorForm] = useState(false);



  const candidateData = [
    { id: "202504JCM", name: "John Doe", country: "India", status: "Active" },
    { id: "202505JCM", name: "Alice Smith", country: "USA", status: "Pending" },
    { id: "202506JCM", name: "Rahul Sharma", country: "UK", status: "Active" },
  ];

  const vendorData = [
    { id: 1, company: "TechCorp", service: "Software", status: "Approved" },
    { id: 2, company: "BuildX", service: "Construction", status: "Pending" },
    { id: 3, company: "Foodify", service: "Catering", status: "Active" },
  ];

  return (
      <div className="main-container">
      <h1 className="page-heading">Dashboard Overview</h1>
      <p className="page-description">
        Here you can find details for both candidates and vendors.
      </p>

      <div className="tables-container">
        {/* Candidate Table */}
        <div className="table-wrapper">
          <h2 className="table-heading">FOR CANDIDATES</h2>
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>COUNTRY</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {candidateData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.country}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="apply-btn"
            onClick={() => {
              setShowCandidateForm(true);
              setShowVendorForm(false);
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Vendor Table */}
        <div className="table-wrapper">
          <h2 className="table-heading">FOR VENDORS</h2>
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>COMPANY</th>
                <th>SERVICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {vendorData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.company}</td>
                  <td>{row.service}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="apply-btn"
            onClick={() => {
              setShowVendorForm(true);
              setShowCandidateForm(false);
            }}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Candidate Form Modal */}
      {showCandidateForm && (
        <div className="modal-overlay" onClick={() => setShowCandidateForm(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Candidate Application Form</h3>
            
            <input type="text" placeholder="Full Name"  required/>
            <input type="email" placeholder="Email"  required/>
            <input type="number" placeholder="Date of Birth" required />
            <input type="text" placeholder="Position Held" required />
            <input type="text" placeholder="Address Line"  required/>
             
             
            <input type="text" placeholder="Country" required />
            <input type="number" placeholder="Mobile" required />
            <input type="Text" placeholder="Currency" required />
            <input type="Text" placeholder="Currency" required />
            <input type="Text" placeholder="Mother Tongue" required />
            

            <textarea placeholder="Why do you want to apply?" required />
            <div className="modal-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowCandidateForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vendor Form Modal */}
      {showVendorForm && (
        <div className="modal-overlay" onClick={() => setShowVendorForm(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Vendor Application Form</h3>
            <input type="text" placeholder="Company Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Service Type" required />
            <textarea placeholder="Tell us about your services" required />
            <div className="modal-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowVendorForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default TwoTables;
