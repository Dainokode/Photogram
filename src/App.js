import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/main.scss";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container">
      <Navbar />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg ? (
        <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      ) : null}
    </div>
  );
};

export default App;
