import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs
        ? docs.map((doc) => {
            return (
              <div
                className="img-wrap"
                onClick={() => setSelectedImg(doc.url)}
                key={doc.id}
              >
                <img src={doc.url} alt="uploaded pic" />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ImageGrid;
