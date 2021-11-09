import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'; 

function App() {
  const [data,setDate] =useState(null);
  const [display,setDisplay] =useState(false);
  function getData(val){
    setDate(val.target.value);
   console.warn(val.target.value);
  }

  return (
    <div className="App">
      {
        display?
        <h1>{data}</h1>
        :null
      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setDisplay(true)}>Display value</button>
       </div>
  );
}
export default App;
