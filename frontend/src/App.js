import { useState } from "react";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [resumeText, setResumeText] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8081/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setScore(data.score);
    setSkills(data.skills || []);
    setSuggestions(data.suggestions || []);
    setResumeText(data.resumeText || "");
  };

  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          AI Resume Analyzer 🚀
        </h1>

        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />

        <br />

        <button
          onClick={uploadFile}
          className="upload-btn"
        >
          Upload Resume
        </button>

        <div className="progress-bar">

          <div
            className="progress"
            style={{ width: `${score}%` }}
          >
            {score}%
          </div>

        </div>

        <div className="skills-container">

          {skills.map((skill, index) => (

            <span
              key={index}
              className="skill-badge"
            >
              {skill.toUpperCase()}
            </span>

          ))}

        </div>

        <div className="suggestions">

          <h2>Suggestions 💡</h2>

          {suggestions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

        </div>

        <div className="resume-preview">

          <h2>Resume Preview 📄</h2>

          <textarea
            value={resumeText}
            readOnly
            rows="12"
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default App;
