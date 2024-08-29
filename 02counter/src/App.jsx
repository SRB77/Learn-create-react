import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let  [Counter,setCounter]=useState(0);
  function addValue(){
    setCounter((prevcounter)=>{
      return prevcounter=prevcounter+1;
    })
    console.log("Clicked",Counter);
  }
  function removeValue(){
    setCounter((prevcounter)=>{
      return (prevcounter = prevcounter - 1);
    })
    console.log("removed", Counter);
  }
  
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {Counter} </h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;
