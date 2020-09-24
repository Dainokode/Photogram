import React from "react";
import Navbar from "./components/Navbar";
import "./styles/main.scss";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default App;
