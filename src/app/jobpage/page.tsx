'use client';
import React, { useState } from "react";
import "./styles.css";

const TwoTables: React.FC = () => {
  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);

  // 🔗 Replace these with your actual Google Apps Script Web App URLs
const CANDIDATE_FORM_URL = "Candidate_VENDOR_SCRIPT_URL";
  const VENDOR_FORM_URL = "PASTE_VENDOR_SCRIPT_URL";

  // ✅ Candidate Form Submit
  const handleCandidateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.currentTarget));

  try {
    const response = await fetch(CANDIDATE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    alert("✅ Candidate form submitted successfully!");
    setShowCandidateForm(false);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("❌ Error submitting form. Please try again.");
  }
};


  // ✅ Vendor Form Submit
  const handleVendorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    await fetch(VENDOR_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("✅ Vendor form submitted successfully!");
    setShowVendorForm(false);
  };

  const candidateData = [
    { id: "202504JCM", type: "Recording", language: "Hebrew", status: "Available" },
    { id: "202505JCM", type: "Recording", language: "Swedish", status: "Available" },
    { id: "202506JCM", type: "Recording", language: "Arabic (UAE)", status: "Available" },
    { id: "202507JCM", type: "Recording", language: "Arabic (KW)", status: "Available" },
    { id: "202508JCM", type: "Recording", language: "Arabic (QA)", status: "Available" },
    { id: "202509JCM", type: "Recording", language: "Arabic (BH)", status: "Available" },
    { id: "2025010JCM", type: "Animation video editing", language: "NA", status: "Available" },
    { id: "2025011JCM", type: "Audio Evaluation (Annotation)", language: "Hindi", status: "Available" },
    { id: "2025012JCM", type: "Audio Evaluation (Annotation)", language: "German", status: "Available" },
    { id: "20250813CM", type: "Audio Evaluation (Annotation)", language: "French", status: "Available" },
    { id: "20250914CM", type: "Audio Evaluation (Annotation)", language: "Spanish", status: "Available" },
  ];

  const vendorData =  [
    { id: "202504JCM", type: "Recording", language: "Hebrew", status: "Available" },
    { id: "202505JCM", type: "Recording", language: "Swedish", status: "Available" },
    { id: "202506JCM", type: "Recording", language: "Arabic (UAE)", status: "Available" },
    { id: "202507JCM", type: "Recording", language: "Arabic (KW)", status: "Available" },
    { id: "202508JCM", type: "Recording", language: "Arabic (QA)", status: "Available" },
    { id: "202509JCM", type: "Recording", language: "Arabic (BH)", status: "Available" },
    { id: "2025010JCM", type: "Animation video editing", language: "NA", status: "Available" },
    { id: "2025011JCM", type: "Audio Evaluation (Annotation)", language: "Hindi", status: "Available" },
    { id: "2025012JCM", type: "Audio Evaluation (Annotation)", language: "German", status: "Available" },
    { id: "20250813CM", type: "Audio Evaluation (Annotation)", language: "French", status: "Available" },
    { id: "20250914CM", type: "Audio Evaluation (Annotation)", language: "Spanish", status: "Available" },
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
                <th>TYPE</th>
                <th>LANGUAGE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {candidateData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.type}</td>
                  <td>{row.language}</td>
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
                <th>TYPE</th>
                <th>LANGUAGE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {vendorData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.type}</td>
                  <td>{row.language}</td>
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Candidate Application Form</h3>
            <form onSubmit={handleCandidateSubmit}>
              <input name="fullName" type="text" placeholder="Full Name" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="dob" type="date" placeholder="Date of Birth" required />
              <input name="position" type="text" placeholder="Position Held" required />
              <input name="address" type="text" placeholder="Address Line" required />
              <input name="country" type="text" placeholder="Country" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" required />
              <input name="currency" type="text" placeholder="Currency" required />
              <input name="motherTongue" type="text" placeholder="Mother Tongue" required />
              <textarea name="reason" placeholder="Why do you want to apply?" required />
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowCandidateForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Vendor Form Modal */}
      {showVendorForm && (
        <div className="modal-overlay" onClick={() => setShowVendorForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Vendor Application Form</h3>
            <form onSubmit={handleVendorSubmit}>
              <input name="agencyName" type="text" placeholder="Agency Name" required />
              <input name="agencyEmail" type="email" placeholder="Agency Email" required />
              <input name="pocName" type="text" placeholder="POC Name" required />
              <input name="pocContact" type="tel" placeholder="POC Contact" required />
              <input name="address" type="text" placeholder="Registered Address" required />
              <input name="languages" type="text" placeholder="Languages" required />
              <textarea
                name="aboutServices"
                placeholder="Tell us about your services"
                required
              />
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowVendorForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwoTables;
