import { useState } from 'react';
import { Button } from './EventsInList';
export function Child({setCount}){
    return (
        <div className="App">
            <p>Child</p>
            <Button onClick={()=> setCount(1)}>1</Button>
            <Button onClick={()=> setCount(2)}>2</Button>
            <Button onClick={()=> setCount(3)}>3</Button>
        </div>
    )
}

export function Parent(){
    const [count, setCount] = useState(0)
    return (
        <div className="App">
        <h1>How to pass props from child to Parent</h1>
            <p>Parent</p>
            <p>count: {count}</p>
            <Child setCount={setCount}/>
        </div>
    )
}