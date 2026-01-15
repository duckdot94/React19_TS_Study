import { useReducer } from "react";
import { counterReducer } from "../../reducer/counterReducer";
import { cartReducer } from "../../reducer/cartReducer";
import { userReducer } from "../../reducer/userReducer";

//import { useState } from "react";

export default function App() {
  /*
  let name = '철수';
  const age = 20;

  const nameChage = () = 
  > {
    name = '영희';
    console.log(name);
  }
  */
  /** 버튼을 클릭해도 여전히 철수로 표시된다.
   * 컴포넌트가 리렌더링 되지 않았기 때문에 화면이 변하지 않는다. 
  */

  /**
   * useState 훅
   * [이전_상태(값), 상태_변경_함수] 형태의 배열을 반환하는 함수
   * 두 변수를 사용해 컴포넌트 내부의 상태를 효율적으로 관리할 수 있다. 
   * 상태값이 변경되면, 리액트에서 자동으로 리렌더링해 UI를 새로운 상태로 업데이트한다.
   */
  //const [count, setCount] = useState(0);

  //const clickHandler = () => setCount(count => count + 1);

  /** 문자열이나 숫자를 상태에 할당하려면 타입 불일치로 오류 발생 */
  /*
  const [name, setName] = useState<null | string>(null);
  const [age, setAge] = useState<null | number>(null);
  const [gender, setGender] = useState<null | string>(null);
  
  const clickHandler = () => {
    setName('영희');
    setAge(20);
    setGender('female');
  }
  */
  /**
   * 훅 규칙 관한 내용 공식 문서
   * https://ko.react.dev/reference/rules/rules-of-hooks
   */
  
  //const [ count, setCount ] = useState(0);
  /**
   * 리액트 상태 업데이트 방식으로 인해 1씩 증가
   * 리액트는 변경을 여러 상태 변경을 즉시 처리 하지 않고 
   * 비동기적으로 처리해 렌더링이 끝난 뒤 한 번에 모아서 적용
   * 일괄 업데이트(batch update)라고 하며, 불필요한 리렌더링을 줄여 
   * 성능을 최적화하는 방식입니다.
   * 이 문제는 상태 변경 함수에 콜백 형태를 사용하면 해결할 수 있다.
   */
  /*
  const clickHandler = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  */
  /*
    <div>
      <p>{count}</p>
      <button onClick={clickHandler}>Value Change</button>
    </div>
  */
  /**
   * 리듀서 함수(reducer function)
   * 이전 상태(state)와 액션(ation)을 매개변수로 받아 새로운 상태를 반환하는 함수
   */
  const [count, countDispatch] = useReducer(counterReducer, 0);
  const [user, userDispatch] = useReducer(userReducer, {});
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={() => countDispatch({ type : 'DECREMENT' })}>감소</button>
        <button onClick={() => countDispatch({ type : 'RESET' })}>초기화</button>
        <button onClick={() => countDispatch({ type : 'INCREMENT' })}>증가</button>
      </div>
      <div>
        <h2>User : {user.name}</h2>
        <button onClick={() => userDispatch({ type : 'SET_USER', payload: { name:'Alice' } })}>Set User</button>
      </div>
      <div>
        <h2>Cart Items: {cart.length}</h2>
        <button onClick={() => cartDispatch({ type : 'ADD_ITEM', payload: { id: 1, name: 'Item 1' } })}>Add Item</button>
      </div>
    </>
  );
}