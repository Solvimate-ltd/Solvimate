'use client';
import React from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

const TwoTables: React.FC = () => {
  const router = useRouter();

  const candidateData = [
    { id: "202504JCM", type: "Recording", language: "Hebrew", status: "Available" },
    { id: "202505JCM", type: "Recording", language: "Swedish", status: "Available" },
    { id: "202506JCM", type: "Recording", language: "Arabic (UAE)", status: "Available" },
    { id: "202507JCM", type: "Recording", language: "Arabic (KW)", status: "Available" },
    { id: "202508JCM", type: "Recording", language: "Arabic (QA)", status: "Available" },
    { id: "202509JCM", type: "Recording", language: "Arabic (BH)", status: "Available" },
    { id: "2025010JCM", type: "Animation video editing", language: "NA", status: "Available" },
    { id: "2025011JCM", type: "Audio Evaluation (Annotation)", language: "Hindi", status: "Available" },
    { id: "2025012JCM", type: "Audio Evaluation (Annotation)", language: "German", status: "Available" },
    { id: "20250813CM", type: "Audio Evaluation (Annotation)", language: "French", status: "Available" },
    { id: "20250914CM", type: "Audio Evaluation (Annotation)", language: "Spanish", status: "Available" },
  ];

  const vendorData = [
    { id: "202504JCM", type: "Recording", language: "Hebrew", status: "Available" },
    { id: "202505JCM", type: "Recording", language: "Swedish", status: "Available" },
    { id: "202506JCM", type: "Recording", language: "Arabic (UAE)", status: "Available" },
    { id: "202507JCM", type: "Recording", language: "Arabic (KW)", status: "Available" },
    { id: "202508JCM", type: "Recording", language: "Arabic (QA)", status: "Available" },
    { id: "202509JCM", type: "Recording", language: "Arabic (BH)", status: "Available" },
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
            onClick={() => router.push("/candidateForm")}
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
            onClick={() => router.push("/vendorForm")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoTables;
