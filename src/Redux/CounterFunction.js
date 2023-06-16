export function CounterFunction(){
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        const state = store.getState();
    })
    return <div className="App">
       <div>Counter Function Component</div>
       <div>0</div>
       <div>
        <button>Increment</button>
        <button>Decrement</button>
       </div>
    </div>
}