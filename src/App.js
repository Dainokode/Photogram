import React from "react";
import Navbar from "./components/Navbar";
import "./styles/main.scss";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <UploadForm />
    </div>
  );
};

export default App;
