import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const DownloadReportButton = () => {
  const downloadReport = () => {
    axios
      .get("http://localhost:3000/api/v1/reports", {
        responseType: "blob", // Important
      })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/pdf", // Adjust the file type as needed
        });
        saveAs(blob, "vaccine_report.pdf"); // Adjust the file name as needed
      })
      .catch((error) => {
        console.error("Error downloading report:", error);
      });
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      onClick={downloadReport}
    >
      Download Report
    </button>
  );
};

export default DownloadReportButton;
