import React, { useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import imgSrc from "../assets/pdfs/sample.pdf";
const PdfViewer = () => {
  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc: require("../assets/pdfs/sample.pdf"),
      },
      document.getElementById("viewer")
    ).then((instance) => {
      // Access the instance API here if needed
    });
  }, []);

  return <div id="viewer" style={{ height: "100vh" }} />;
};

export default PdfViewer;
