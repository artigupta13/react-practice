import { useState, useContext, createContext } from "react";

const UserContext = createContext();

function ContextPractice() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h3> useContext example </h3>
        <h3>{`Hello ${user}`}</h3>
        <button id="b1"
          onClick={() => {
            user !== "Arti Gupta"
              ? setUser("Arti Gupta")
              : setUser("Jesse Hall");
          }}
        >
          {" "}
          change name
        </button>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3> Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h3> Componenet 5</h3>
      <h4>{`Hello ${user} again`}</h4>
    </>
  );
}

export default ContextPractice;
