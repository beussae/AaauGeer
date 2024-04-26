import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <div>
      <h1>React Props&State 알아보기</h1>
      <h2>ClassProps</h2>
      <ClassProps name="어피치" color="pink" identity="복숭아" />
      <ClassProps name="라이언" color="orange" identity="수사자" />
      <ClassProps2
        name="춘식이"
        color="beige"
        identity="고양이"
        bgColor="black"
      />
      <h2>FunctionProps</h2>
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <h2>ClassState</h2>
      <ClassState />
      <h2>FunctionState</h2>
      <FunctionState />
    </div>
  );
}

export default App;
