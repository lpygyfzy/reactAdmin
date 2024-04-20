
import {useState} from 'react'
const name = '龚一凡'
function getName () {
  return '刘朋燕'
}
const list = [
  { id: 100, name: 'Vue' },
  { id: 101, name: 'Rect' },
  { id: 102, name: 'Angular' },
]
const state = false
function getArticleTem (code) {
  if (code === 0) {
    return '我是0'
  } else if (code === 1) {
    return '我是1'
  } else if (code === 2) {
    return '我是2'
  }
}
const Button = (props) => {
  return <button onClick={props.my}>{props.count}</button>
}
function App() {
  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(0)
  const handleClick = (name,e) => {
    console.log("按钮事件触发了",name,e);
    setCount(count + 1)
  } 
  const handleClick1 = (name,e) => {
    console.log("按钮事件触发了",name,e);
    setCount1(count1 + 1)
  } 

  return (
    <div className="App">
      {'Hello, world'}
      {name}
      {getName()}
      {new Date().getDate()}
      <div style={{color: 'red'}}>
        this is div
      </div>
      <div>
        <ul>
          { list.map(item => <li key={item.id}>{item.name}</li> ) }
        </ul>
      </div>
      <div>
        {state && <span>1111</span>}
        {state ? <span>1111</span> : <span>2222</span>}
      </div>
      <div>
        {getArticleTem(2)}
      </div>
      <button onClick={ handleClick }>{count}</button>
      <div>
        <Button my = {handleClick1} count = {count1}/>
      </div>
    </div>
  );
}

export default App;
