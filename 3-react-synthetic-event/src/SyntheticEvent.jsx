export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log("이벤트 발생", e);
  }
  function printInputValue(e) {
    console.log("input창 입력값", e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticEvent}>클릭이벤트 콘솔에 찍기</button>
      <button
        onClick={(e) => {
          syntheticEvent(e);
        }}
      >
        클릭이벤트 콘솔에 찍기 2
      </button>
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue} />
    </div>
  );
}
