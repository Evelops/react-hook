import React,{Component,useState} from 'react';
import './App.css';

const App = () =>{
  const [value,setCount]=useState(0);
  return(
    <>
    {value}
    <button onClick={()=> setCount(value+1)}>Plus</button>
    </>
  );
};

export default App;
