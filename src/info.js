// src/main.js
import React from "react";

function InfoComponent() {
  const containerStyle = {
    position: "relative",
    textAlign: "center",
  };

  const textStyle = {
    position: "absolute",
    top: "40%", // 세로 기준으로 위로부터 70% 위치
    left: "50%", // 가로 기준으로 정중앙 위치
    transform: "translate(-50%, -50%)", // 정중앙 정렬을 위한 변형
    color: "#FFFFFF", // 텍스트 색상을 하얀색으로 지정
    fontSize: 16, // 폰트 사이즈를 36으로 지정
    fontWeight: "bold",
  };

  return (
    <div>
      <p style={textStyle}>한국술법학교 입학설명회</p>
      <img src="./res/logo_w.svg" alt="logo CTA" className="logo-image" />
    </div>
  );
}

export default InfoComponent;
