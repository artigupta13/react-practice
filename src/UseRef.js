import {useState, useEffect, useRef } from 'react';

function UseRef(){
    const [ name, setName ] = useState('')
   // const [renderCount, setRenderCount ] = useState(0)
    const renderCount  = useRef(0)
    useEffect(()=>{
        console.log(renderCount)
        renderCount.current = renderCount.current+1
    })
    return (
        <div className='App'>
        <h1>useRef Example</h1>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
          <h2> I have been rendered {renderCount.current} times</h2> 
        </div>
    )
}

export default UseRef;