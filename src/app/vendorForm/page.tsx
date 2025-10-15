'use client';
import React, { useState } from "react";
import "./styles.css";

const CandidateForm: React.FC = () => {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJeNK0mUe2H_snqVj8A0LHQnshQKtIKXexw_cncotQXWZqvY9uyNqggHcloEEX1uteEw/exec";
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as any;

    // Convert resume to Base64
    if (resumeFile) {
      const reader = new FileReader();
      reader.readAsDataURL(resumeFile);
      reader.onloadend = async () => {
        const base64 = reader.result?.toString().split(",")[1] || "";
        await sendData({ ...formData, resume: base64, resumeName: resumeFile.name, resumeType: resumeFile.type });
      };
    } else {
      await sendData(formData);
    }
  };

  const sendData = async (data: any) => {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
         mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

    //   if (!response.ok) throw new Error("Failed to submit form");

      alert("✅ Candidate form submitted successfully!");
      (document.querySelector("form") as HTMLFormElement).reset();
      setResumeFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting form. Please try again.");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Vendor Application Form</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          {/* Left Column */}
          <div className="form-left">
            <p>Job ID:</p>
            <input name="jobId" type="text" placeholder="Job ID" required />

            <p>Agency Name:</p>
            <input name="fullName" type="text" placeholder="Full Name" required />

            <p>Main Address:</p>
            <input name="address" type="text" placeholder="Address" required />

            <p>Experience (years):</p>
            <input name="experience" type="number" placeholder="Experience" required />

            <p>Pan Number:</p>
            <input name="panNumber" type="text" placeholder="Pan Numbmer" required />
          </div>


          {/* Right Column */}
          <div className="form-right">
            <p>Type:</p>
            <input name="type" type="text" placeholder="Job Type" required />

            <p>Agency Email:</p>
            <input name="email" type="email" placeholder="Email" required />

            <p>Mobile:</p>
            <input name="mobile" type="tel" placeholder="Mobile Number" required />

            <p> Company Profile:</p>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => window.history.back()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
