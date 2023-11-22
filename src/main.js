// src/main.js
import React, { useState } from "react";
import InfoComponent from "./info";
import img from "./res/main_bg.png";

function MainComponent() {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(true);
  };

  const imgStyle3 = {
    width: "100%", // 이미지의 너비를 100%로 설정
    height: "100vh", // 이미지의 높이를 100%로 설정
    top: 0,
    left: 0,
    position: "fixed",
  };

  return (
    <div>
      {showInfo ? (
        <InfoComponent />
      ) : (
        <>
          <img src={img} style={imgStyle3} alt="background"></img>
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
