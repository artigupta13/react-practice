import { useState, useEffect, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount ] = useState(0)
  const renderCount = useRef(0);
  useEffect(() => {
    console.log(renderCount);
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div className="App">
      <h3>useRef Example</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3> I have been rendered {renderCount.current} times</h3>
    </div>
  );
}

export default UseRef;
