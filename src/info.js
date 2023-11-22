import React from "react";
import img from "./res/main_bg.png";

function InfoComponent() {
  const textStyle = {
    position: "absolute",
    top: "40%", // 세로 기준으로 위로부터 70% 위치
    left: "50%", // 가로 기준으로 정중앙 위치
    transform: "translate(-50%, -50%)", // 정중앙 정렬을 위한 변형
    color: "#FFFFFF", // 텍스트 색상을 하얀색으로 지정
    fontSize: 16, // 폰트 사이즈를 36으로 지정
    fontWeight: "bold",
  };

  const textStyle2 = {
    position: "absolute",
    top: "50%", // 세로 기준으로 위로부터 70% 위치
    left: "57%", // 가로 기준으로 정중앙 위치
    fontSize: 10,
    fontWeight: 400,
    color: "#FFFFFF",
    textAlign: "left",
  };

  const textNormal1 = {
    position: "absolute",
    top: "70%", // 세로 기준으로 위로부터 70% 위치
    left: "20%", // 가로 기준으로 정중앙 위치
    fontSize: 10,
    fontWeight: 400,
    color: "#FFFFFF",
    textAlign: "left",
  };

  const textNormal2 = {
    position: "absolute",
    top: "70%", // 세로 기준으로 위로부터 70% 위치
    left: "37%", // 가로 기준으로 정중앙 위치
    fontSize: 10,
    fontWeight: 400,
    color: "#FFFFFF",
    textAlign: "left",
  };

  const imgStyle1 = {
    position: "absolute",
    top: "50%", // 상단으로부터 60% 위치
    left: "20%", // 좌측으로부터 30% 위치
    width: "123px", // 이미지의 너비
    height: "128px", // 이미지의 높이
  };

  const imgStyle2 = {
    position: "absolute",
    top: "50%", // 상단으로부터 60% 위치
    left: "37%", // 좌측으로부터 30% 위치
    width: "123px", // 이미지의 너비
    height: "128px", // 이미지의 높이
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
      <img src={img} style={imgStyle3} alt="background"></img>
      <p style={textStyle}>한국술법학교 입학설명회</p>
      <img src="./res/logo_w.svg" alt="logo CTA" className="logo-image" />
      <p style={textStyle2}>
        본교에서는 개교 100주년을 맞아
        <br /> 최초로 특별 공개 입학설명회를 개최합니다.
        <br />
        학교를 직접 탐방하며 특별한 물건을 찾아내면,
        <br /> 마침내 나의 수호신을 만날 수 있습니다. <br />
        <br />
        탐방을 다시 시작하고 싶으면 로고를 클릭하세요.
        <br />
      </p>
      <p style={textNormal1}>
        강의실 안 특별한 물건을 찾아
        <br />
        질문에 대답해보자.
      </p>
      <p style={textNormal2}>
        모든 물건들을 발견하면
        <br />
        나의 수호신을 만날 수 있다.
      </p>
      <img src="./res/img.svg" alt="img1" style={imgStyle1} />
      <img src="./res/img.svg" alt="img2" style={imgStyle2} />
    </div>
  );
}

export default InfoComponent;
