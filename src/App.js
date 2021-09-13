import React,{Component,useState} from 'react';
import './App.css';

const App = () =>{
  const [value,setCount]=useState(0);
  const [email,setEmail]=useState("");
  const updateEmail = e =>{
    const {
      target:{value}
    } = e;
    setEmail(value);
  };
  return(
    <>
    {value}
    <button onClick={()=> setCount(value+1)}>Plus</button>
    <button onClick={()=>setCount(value-1)}>Minus</button>
    <input placeholder="Email" value={email} onchange={updateEmail}/>
    </>
  );
};

export default App;
