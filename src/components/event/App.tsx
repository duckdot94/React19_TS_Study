import type React from "react";
import Button from "../button/Button";

/**
 * JSX 에서는 HTML 태그에는 DOM 표준 이벤트 속성만 사용 할 수 있다. 
 * 존재하지 않는 속성을 사용하면 웹브라우저에서 인식 할 수 없어 오류가 발생하거나, 무시된다.
 */
export default function App() {
  /*
  const clickHandler = ( msg : string ) => {
    alert(msg);
  }
  */
  /**
   * 첫 번째 매개변수로 e를 선언해 자동으로 이벤트 객체가 전달.
   */
  /*
  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    , msg : string
  ) => {
    console.log(e);
    alert(msg);
  };
  */
  /**
   * 캡쳐링이란? 캡쳐링은 이벤트가 부모 요소에서 시작해 자식 요소로 내려가는 방식
   * 버블링이란? 이벤트가 자식요소에서 시작해 부모 요소로 전파되는 방식                                              
   */
  const handleCapture = () => {
    console.log('Parent');
  };

  /*
  const handleBubble = () => {
    console.log('Child');
  };
  */
  /**
   * 이벤트 전파 막기
   * 캡쳐링이 일어나지 않게 하려면 이벤트 속성에 Capture 수식어를 사용하지 않으면 됨
   * 버블링은 기본 동작이므로 버블링을 막으려면 명시적으로 코드를 작서해야됨
   */
  
  const handleBubble = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); /* 해당 함수를 호출해서 상위 요소로 전파되는것을 막아준다. */
    console.log('Child');
  };

  return (
    //<button onClick={() => {alert('Button clicked!');}}></button>
   
   /**
    * onFive를 props로 받아 onClick 이벤트와 연결해 사용할 수 있다.
    */
    //<Button onFive={() => alert('five')} />
    //<button onClick={clickHandler}></button>
    /**
     * 함수 참조 방식은 매개변수를 전달 할 수 없다.
     * 매개 변수를 전달하고 싶다면 인라인 핸들러 방식으로 사용하여야 한다.
     * 함수 참조 방식 사용시, 랜더링 될 때 함수가 실행된다.
     */
    //<button onClick={clickHandler('hello')}></button>
    //<button onClick={() => {clickHandler('hello');}}>click</button>
    //<button onClick={(e) => {clickHandler(e, 'Hello')}}>click</button>
    /* <div
      onClick={handleCapture}
      style={{ padding: '50px', backgroundColor: '#f0f0f0' }}
    >Parent
    <button onClick={handleBubble} style={{ marginTop: '20px' }}
    >Click Me</button>
    </div> */

    /**
     * 이벤트 기본 동작 막기
     * onSubmit은 폼이 제출될 때 자동으로 실행하는 이벤트 핸들러
     * e.preventDefault()가 호출되어 페이지 새로고침을 막습니다.
     * 기본동작을 취소할 뿐, 클릭이벤트는 막지 않습니다.
     */
    <> 
      <form onSubmit={(e) => {e.preventDefault();}}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="전송"/>
      </form>
    </>
  );
}