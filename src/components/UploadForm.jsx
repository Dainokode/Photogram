import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // allowed types of images
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a png or jpeg file");
    }
  };

  return (
    <div className="upload-form">
      <form>
        <input type="file" onChange={handleChange} />
        {error ? <div className="error">{error}</div> : null}
        {file ? <div className="file">{file.name}</div> : null}
        {file ? <ProgressBar file={file} setFile={setFile} /> : null}
      </form>
    </div>
  );
};

export default UploadForm;
