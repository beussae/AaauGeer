export default function Inline() {
  const divStyle = {
    width: "300px",
    height: "400px",
    backgroundColor: "yellow",
  };
  const divStyle2 = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };
  return (
    <div style={divStyle}>
      <div style={divStyle2}>AG</div>
    </div>
  );
}
