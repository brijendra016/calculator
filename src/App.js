import React, { useState } from 'react';
import './App.css';
import {add, sub, mul, divi, SolveEvent} from './Calc';

function App() {
  const [inp, SetInp] = useState("0");
  const [res, SetRes]= useState("0");
  const InputEvent = (e) => {
    // console.log(e.target.value);
    const r=res;
    const eq=e.target.value;
    if(eq == 'del'){
    SetInp((prev) => {
      return (prev.substring(0,prev.length-1));
    });
  }
    else if(eq == 'clr')
    {
    SetInp(0);
    // SetRes(0);
    }
    else if(eq == 'ans')
    {
      if(r == "Invalid")
      SetInp(0);
      else {
      SetInp((prev) => {
        if(!isNaN(prev.charAt(prev.length-1)) || prev.charAt(prev.length-1)==')')
        return(prev.replace(prev,r));
        else{
          return(prev.concat(r));
        //   // prev=res;
        //   console.log(res);
          // SetInp(0);
        }
        })
      }
    }
    else{
    SetInp((prev) => {
      // console.log(prev);
      if(inp == '0')
      return (eq);
      else
      return (prev.concat(eq));
    });
    // SetInp (e.target.value);
  }
  };
  const ResultEvent = () => {
    // console.log("hi");
    const exp = inp;
  // console.log(exp);
  SetRes(SolveEvent(exp));
    // return(
    // // console.log(SolveEvent(eq))
    // )
    // if(res==="Invalid")
    // {
    // SetInp(0);
    // }
  } 
  return (
    // <div className="calc">
    // <ul>
    //   <li>Sum: {add(40,4)}</li>
    //   <li>Difference: {sub(40,4)}</li>
    //   <li>Product: {mul(40,4)}</li>
    //   <li>Quotient: {divi(40,4)}</li>
    // </ul>
    // </div>
    <>
    <div className='back'>
      {/* <h1>hii</h1> */}
      <div className='container'>
        <div className='inout'>
          <input type="text" className='in' placeholder='Enter Equation' name="in" value={inp} disabled/> <br/>
          <input type="text" className='out' placeholder='Output' name="output" id="exp" value={res} disabled/>
        </div>
        <div className='row'>
          <button className='sign' onClick={InputEvent} value='('>(</button>
          <button className='sign' onClick={InputEvent} value=')'>)</button>
          <button className='sign' onClick={InputEvent} value='ans'>ans</button>
          <button className='sign' onClick={InputEvent} value='del'>del</button>
          <button className='sign' onClick={InputEvent} value='clr'>clear</button>
        </div>
        <div className='row'>
          <button className='num' onClick={InputEvent} value='7'>7</button>
          <button className='num' onClick={InputEvent} value='8'>8</button>
          <button className='num' onClick={InputEvent} value='9'>9</button>
          <button className='sign' onClick={InputEvent} value='%'>%</button>
          <button className='sign' onClick={InputEvent} value='**(1/2)'>^½</button>
        </div>
        <div className='row'>
          <button className='num' onClick={InputEvent} value='4'>4</button>
          <button className='num' onClick={InputEvent} value='5'>5</button>
          <button className='num' onClick={InputEvent} value='6'>6</button>
          <button className='sign' onClick={InputEvent} value='*'>×</button>
          <button className='sign' onClick={InputEvent} value='/'>÷</button>
        </div>
        <div className='row'>
          <button className='num' onClick={InputEvent} value='1'>1</button>
          <button className='num' onClick={InputEvent} value='2'>2</button>
          <button className='num' onClick={InputEvent} value='3'>3</button>
          <button className='sign' onClick={InputEvent} value='+'>+</button>
          <button className='sign' onClick={InputEvent} value='-'>-</button>
        </div>
        <div className='row'>
          <button className='sign' onClick={InputEvent} value='.'>.</button>
          <button className='num' onClick={InputEvent} value='0'>0</button>
          <button className='sign' onClick={InputEvent} value='**(1/3)'>^⅓</button>
          <button className='ent' onClick={ResultEvent} value='res'>ENTER</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
