import React from "react";
import "../components/styles/InteractiveScorecard.css"; // Import your CSS file for styling

const InteractiveScorecard: React.FC = () => {
  const openPDF = () => {
    window.open("/path/to/your/interactive-scorecard.pdf", "_blank");
  };

  return (
    <div className="interactive-scorecard">
      <button onClick={openPDF}>Interactive Scorecard</button>
    </div>
  );
};

export default InteractiveScorecard;
