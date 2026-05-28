import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #b77add, #70b6e6)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ color: "#333" }}>AI Resume Analyzer 🚀</h1>

        <p style={{ color: "gray", marginBottom: "25px" }}>
          Upload your resume and get instant AI-based analysis
        </p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: "20px" }}
        />

        <br />

        <button
          style={{
            backgroundColor: "#68b2f3",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Upload Resume
        </button>

        {file && (
          <div style={{ marginTop: "20px" }}>
            <p>
              📄 <b>{file.name}</b>
            </p>

            <p style={{ color: "green" }}>
              Ready for analysis ✅
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;