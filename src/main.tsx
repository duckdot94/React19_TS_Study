import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css' /* 삭제 */
import App from './components/event/App.tsx'
/* 
  export 사용시, 하나의 파일에 여러 컴포넌트를 보낼 수 있음.
  export default 사용시, 하나의 파일에 하나의 기본 컴포넌트만 보낼 수 있음.
  import { App } from './App.tsx' // export function App() 사용 시 
  import App from './App.tsx' // export default function App() 사용 시 
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
