export function FunctionProps({ name, number, price }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <hr />
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
      <hr />
    </div>
  );
}

// default props 설정하기
// 컴포넌트이름.defaultProps={정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  number: 3,
  name: "용과",
};
