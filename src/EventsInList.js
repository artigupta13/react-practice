import { styled } from 'styled-components';
import './App.css';
import { useState } from 'react';
const Button = styled.button`
  &:focus {
    outline: 2px solid red;
    background-color: yellow;
  }
  height: 100px;
  width: 100px;
`;

function EventsInList() {

  const [myarray, setmyarray] = useState([ 1,2,3,4,5,6])
  function handleMe(e, index){
    //e.preventDefault();
    const temp = myarray.map((a,i)=>{
      if(i === index){
        return a+1
      }
      else{
        return a
      }
    })
    setmyarray(temp)
  }
  return (
    <div className="App">
    <ul>{myarray.map((element,index) => <Button className="style_button" key={index} 
    onClick={(e)=> handleMe(e,index)}>{element}</Button>)}</ul>
    </div>
  );
}

export default EventsInList;
