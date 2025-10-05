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