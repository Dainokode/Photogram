import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs
        ? docs.map((doc) => {
            return (
              <motion.div
                layout
                whileHover={{ opacity: 1 }}
                className="img-wrap"
                onClick={() => setSelectedImg(doc.url)}
                key={doc.id}
              >
                <img src={doc.url} alt="uploaded pic" />
              </motion.div>
            );
          })
        : null}
    </div>
  );
};

export default ImageGrid;
