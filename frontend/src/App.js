import { useState } from "react";

function App() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

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
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>AI Resume Analyzer 🚀</h1>

      <input type="file" onChange={handleFileChange} />

      <br /><br />

      <button onClick={uploadFile}>
        Upload Resume
      </button>

      <h3>{message}</h3>

    </div>
  );
}

export default App;