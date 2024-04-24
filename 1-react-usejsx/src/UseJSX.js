export default function UseJSX() {
  // js 문법 사용해보기
  //   let isShow = true;
  let isShow = false;

  function myFunc() {
    alert("aaaugeer");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      <hr />
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true 일때 보임" : "false 일때 보임"}
      </div>
      <div style={{ backgroundColor: "red" }}>{isShow && "true 일때 보임"}</div>
      <div style={{ backgroundColor: "skyblue" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false이군요!" : "TURE이군요!"}
      </div>
      <div style={{ backgroundColor: "purple" }}>
        {!isShow && "false 일때 보임"}
      </div>
      <div onClick={() => addNum(8, 5)}>8더하기 5의 결과를 alert로 확인</div>
      <div onClick={() => myFunc()}>myFunc실행</div>
      <br />
      <hr />
    </div>
  );
}
