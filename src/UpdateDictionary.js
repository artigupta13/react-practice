import { useEffect, useState } from "react";
function UpdateDictionary() {
  const [student, setStudent] = useState({
    1: "Arti",
    2: { 1: "Red", 2: "Green" },
  });
  const updateMe = () => {
    setStudent({
      ...student,
      2: { 1: "Red", 2: "Blue" },
    });
  };

  useEffect(() => {
    console.log("I have been updated once");
  }, [student]);

  return (
    <div className="App">
      <h3> Update object</h3>
      <button id="b1" onClick={updateMe}>
        {" "}
        Update Object
      </button>
      <p>{JSON.stringify(student)}</p>
    </div>
  );
}

export default UpdateDictionary;
