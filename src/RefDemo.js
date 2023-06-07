import React from 'react';
function RefDemo(){
    const inputValue = React.createRef(); 
    function HandleSubmit(e){
        alert(`Input value: ${inputValue.current.value}`)
    }
    return (
        <div className='App'>
        <h1>use of createRef</h1>
            <form onSubmit={HandleSubmit}>
            <input type="text" ref={inputValue}/>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default RefDemo;