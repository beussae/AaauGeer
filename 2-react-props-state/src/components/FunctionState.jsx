import { useState } from "react";
export default function FunctionState() {
  const [isEnglish, setIsEnglish] = useState(true);
  function changeLanguage() {
    setIsEnglish(!isEnglish);
  }
  return (
    <div className="state">
      <div style={{ background: "red", color: "#fff" }}>
        {isEnglish ? "apple" : "사과"}
      </div>
      <button onClick={changeLanguage}>
        {isEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );
}
