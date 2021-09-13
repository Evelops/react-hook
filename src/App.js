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
/*
class AppOrigin extends React.Component{
  state = {
    value:1
  };

  render(){
    const{value}=this.state;
    return(
      <div>
      <button onClick={this.Plus}>Plus</button>
      <button onClick={this.Minus}>Minus</button>
      </div>
    );
  }

  Plus = () =>{
    this.Setstate(state=>{
      return {
        value:state.value+1
      };
    });
  };
  Minus = () => {
    this.Setstate(state=>{
      return{
        value:state.value-1
      };
    });
  };
}*/ // react hooks를 사용했을 땨와, react 에서 class componet를 사용했을 때의 차이, 
// react hooks를 사용하면 코드가 엄청나게 간결해지고 ,class 개념이 아닌 함수적 프로그래밍을 할 수 있어 간결, 유지보수도 쉬움. 
export default App;
