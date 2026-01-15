import classNames from 'classnames/bind';
import style from '../../App.module.css';
 
export default function App() {
    /** 
     * classnames 라이브러리
     * 글로벌 스타일이나 CSS 모듈을 사용할 때 상황에 따라 클래스 이름을 조건부로 적용해야하는 경우가 많습니다.
     * 이럴 때 유용한 도구가 classnames 라이브러리 입니다.
     * npm i classnames 
     * 
    */
   
    // const btnClass = classNames('btn','primary');
    // console.log(btnClass);

    // console.log(classNames('foo', 'bar'));
    // console.log(classNames('foo', {bar : true}));
    // console.log(classNames({'foo-bar' : true}));
    // console.log(classNames({'foo-bar' : false}));
    // console.log(classNames({foo : true}, {bar : true}));
    // console.log(classNames({foo : true, bar : true}));
    // console.log(classNames('foo', { bar : true, duck : false}, 'baz', {quux : true}));
    // console.log(classNames(null, false, 'bar', undefined, 0, 1, {'baz': null}, ''));
    
    const isActive = true;
    // const btnClass = classNames('btn', { 'is-active': isActive });

    const cx = classNames.bind(style);
    
    return (
        <>
            <button className={cx('btn', { 'is-active': isActive })}>App button</button>
        </>
    );
}