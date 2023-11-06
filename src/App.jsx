import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  function incrementCount(){
    setCount(count+1);
  }

  function decrementCount(){
    
    count==0 ? setCount(0) : setCount(count-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {count}</h2>
      <button style={{'margin-right':'10px'}} onClick={incrementCount}>+1 count</button>
      {count == 0 ? <button onClick={decrementCount} disabled>-1 count</button> : <button onClick={decrementCount}>-1 count</button>}
    </>
  )
}

export default App
