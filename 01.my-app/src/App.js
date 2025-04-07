import logo from './logo.svg';
import './App.css';
import { React } from 'react';
// 주석임
/* 주석임 */
function App() {
  const isStudnet = true;
  if(isStudnet) {
    return <h1>Student</h1>
  } else {
    return <h1>Not Student</h1>
  }
}

// 삼항연산자로 인식하게 하려면 { }안에 넣어준다
<div className="App">
  {  }
</div>
export default App;
