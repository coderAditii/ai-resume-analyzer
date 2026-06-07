import { useState } from "react";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  //const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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

    const data = await response.text();

    //setMessage(data);

    const scoreMatch = data.match(/ATS Score: (\d+)/);

    if (scoreMatch) {
      setScore(scoreMatch[1]);
    }

   

    const matches = data.match(/\[(.*?)\]/g);

    if (matches) {

    const extractedSkills = matches[0]
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(skill => skill.trim());

    setSkills(extractedSkills);

    if (matches[2]) {

    const extractedSuggestions = matches[2]
      .replace("[", "")
      .replace("]", "")
      .split(",")
      .map(item => item.trim());

    setSuggestions(extractedSuggestions);
    }
  }
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

    </div>

  </div>
);
}

export default App;