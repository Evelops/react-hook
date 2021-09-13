import React,{useState} from 'react';
import './App.css';

const App = () =>{
  const [value,setCount]=useState(0);
  const Plus =() =>{setCount(value+1);};
  const Minus =() =>{setCount(value-1);};

  return(
    <>
    <button onClick={Plus}>Plus</button>
    <button onClick={Minus}>Minus</button>
    </>
  );
};

export default App;
