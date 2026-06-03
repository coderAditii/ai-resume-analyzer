import { useState } from "react";

function App() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState([]);

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

    setMessage(data);

    const scoreMatch = data.match(/ATS Score: (\d+)/);

    if (scoreMatch) {
      setScore(scoreMatch[1]);
    }

    const skillMatch = data.match(/\[(.*?)\]/);

    if (skillMatch) {
      const extractedSkills = skillMatch[1]
        .split(",")
        .map(skill => skill.trim());

      setSkills(extractedSkills);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >

      <h1>AI Resume Analyzer 🚀</h1>

      <input type="file" onChange={handleFileChange} />

      <br /><br />

      <button
        onClick={uploadFile}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        Upload Resume
      </button>

      <br /><br />

      <div
        style={{
          width: "300px",
          height: "30px",
          backgroundColor: "#ddd",
          margin: "auto",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            backgroundColor: "green",
            textAlign: "center",
            color: "white",
            lineHeight: "30px",
            transition: "1s",
          }}
        >
          {score}%
        </div>
      </div>

      <br />

      <div>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 15px",
              margin: "5px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {skill.toUpperCase()}
          </span>
        ))}
      </div>

      <br />

      <h3>{message}</h3>

    </div>
  );
}

export default App;