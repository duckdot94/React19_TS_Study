//import { Component } from "react";

/**
 * 리액트 애플리케이션에서는 컴포넌트 파일을 보통 src 폴더 하위에 작성합니다. 
 * 개발자에 따라 src/compoents 폴더를 만들어서 정리하는 경우가 많습니다.
 */
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import User from "./components/User";

/** 함수형 컴포넌트 */
/*
export default function App() {
  return (
    <>
      <div> 첫번째 영역</div>
      <div>
        <h1>Hello, React</h1>
      </div>
      <div>
        <h2>result : {10 + 20}</h2>
        <h1>{10 < 20 && "10 이 더 작다"}</h1>
      </div>
    </>
  )
}
*/

/** class형 컴포넌트 */
/*
class App extends Component {
  render() {
    return <h1>Hello, Class Componet!</h1>;
  }
}
export default App;
*/

/** 함수형 컴포넌트
 * 함수형 컴포넌트의 이름은 파스칼 케이스로 작성하여야 한다.
 * 파스칼 케이스란? 각 단어의 첫글자를 대문자로 쓰고, 공백이나 구분자 없이 이어 붙이는 표기법
 */

/* 컴포넌트 트리(component tree) */

export default function App() {
  /*
  const userObj = {
    name: '철수',
    age: 20,
  }

  const clickHandler = () => {
    console.log('clicked');
  }
  */
  //<User name='철수' age={20} />
  //<User userObj={userObj} clickHandler={clickHandler}/>
  
  /*
  return (
    <>
      <Header />
      <Main /> 
      <User {...userObj} clickHandler={clickHandler}/>
      <Footer />
    </>
  );
  */

  /* 기본적으로 빈태그 형태(< />)로 사용하나, 컴포넌트 시작 태그와 종료 태그를 함께 사용하는 형태로도 사용할 수 있다. */
  return (
    <>
      <User title='User Component'>
        <p>James</p>
        <p>20</p>
        <p>male</p>
      </User>
    </>
  );
}