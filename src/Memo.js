import React, {useState} from 'react'
import AnotherComponent from './AnotherComponent';

function Memo() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(["data1", "data2"]);

    const incrementMe = ()=>{
        setCount(pre=> pre+1);
    }
  return (
    <div className="App">
     <h3>React Memo</h3>
     Count: {count} &nbsp;
     <button onClick={incrementMe}>+</button> 
     <AnotherComponent data={data}/>
    </div>
   
  )
}

export default Memo;
