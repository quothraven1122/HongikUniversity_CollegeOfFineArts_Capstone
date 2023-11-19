// src/main.js
import React, { useState } from "react";
import InfoComponent from "./info";

function MainComponent() {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(true);
  };

  return (
    <div>
      {showInfo ? (
        <InfoComponent />
      ) : (
        <>
          <img src="./res/main_cta.svg" alt="Main CTA" className="cta-image" />
          <img
            src="./res/info_cta.svg"
            alt="Info CTA"
            className="cta-txt-image1"
            onClick={handleInfoClick}
            style={{ cursor: "pointer" }}
          />
          <img
            src="./res/start_cta.svg"
            alt="Start CTA"
            className="cta-txt-image2"
          />
          <img src="./res/logo_w.svg" alt="logo CTA" className="logo-image" />
        </>
      )}
    </div>
  );
}

export default MainComponent;
