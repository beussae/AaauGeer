import { Component } from "react";

export default class ClassComp extends Component {
  render() {
    const divStyle = {
      //인라인 스타일 적용
      backgroundColor: "greenyellow",
      width: "300px",
      height: "100px",
      border: "1px solid red",
    };
    return (
      <div style={divStyle}>
        <div>클래스 컴포넌트 입니다..</div>
      </div>
    );
  }
}
