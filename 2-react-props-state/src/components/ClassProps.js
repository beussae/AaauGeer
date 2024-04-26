import { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {this.props.name}</h4>
        <ul>
          <li>정체:{this.props.identity}</li>
          <li>이미지 컬러:{this.props.color}</li>
        </ul>
      </div>
    );
  }
}

// 구조분해 할당
class ClassProps2 extends Component {
  render() {
    const { name, color, identity, bgColor } = this.props;
    const divStyle = {
      color: color,
      backgroundColor: bgColor,
    };
    return (
      <div style={divStyle}>
        <h4>hi, my name is {name}</h4>
        <ul>
          <li>정체:{identity}</li>
          <li>이미지 컬러:{color}</li>
        </ul>
      </div>
    );
  }
}

ClassProps2.defultProps = {
  bgColor: "skyblue",
};
export { ClassProps, ClassProps2 };
