import React, { useState } from "react";

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
    <form>
      <input type="file" onChange={handleChange} />
      {error ? <div className="error">{error}</div> : null}
      {file ? <div className="file">{file.name}</div> : null}
    </form>
  );
};

export default UploadForm;
