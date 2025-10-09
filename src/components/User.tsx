//export default function User(props : { name: string, age: number}) {
/**
 * userObj 객체의 속성(name, age)까지 한 번에 구조 분해 할당하면 userObj도 생략되어 코드가 간결해짐.
 */
/*
export default function User({ userObj: {name, age }, clickHandler} : { 
    userObj: { name: string, age: number; };
    clickHandler : () => void;
}) {
    
    return (
        <>
        <div>
            <p> name : {name}</p>
            <p> age : {age}</p>
            <button onClick={clickHandler}> 클릭 </button>
        </div>
        </>
    );
}
*/
/** 함수 내부에서의 구조 분해 할당 */
/*
export default function User(props : { userObj: {name : string, age : number}, clickHandler : () => void} ) {
    
    const {
        userObj: { name, age},
        clickHandler,
    } = props;
  
    return (
        <>
        <div>
            <p> name : {name}</p>
            <p> age : {age}</p>
            <button onClick={clickHandler}> 클릭 </button>
        </div>
        </>
    );
}
*/

/*
    interface Props 분리 선언
    ./types/props.d.ts 선언
    실무에서 자주 사용하는 방식으로 알아두면 좋음.    
*/
//export default function User(props : UserProps ) {

/* React.ReactNode 타입으로 지정 */
//export default function User(props : {children : React.ReactNode}) {
/* 구조 분해 할당 */
export default function User({ title, children } : { title : string; children : React.ReactNode; }) {
    //const { name, age, clickHandler } = props;
    /*
    const {
        userObj: { name, age},
        clickHandler,
    } = props;
    */

    /*
    return (
        <>
        <div>
            <p> name : {name}</p>
            <p> age : {age}</p>
            <button onClick={clickHandler}> 클릭 </button>
        </div>
        </>
    );
    */

    //return <>{props.children}</>
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    );
}
