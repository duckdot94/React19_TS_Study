/** 타입 정의 */
interface UserProps { // 인터페이스로 props 타입 분리
    //userObj: { name: string; age: number; };
    name: string;
    age: number;
    clickHandler: () => void;
}
