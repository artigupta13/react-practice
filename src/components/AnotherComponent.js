import React, { memo } from "react";

function AnotherComponent({ data }) {
  console.log("AnotherComponent is being rendered");
  return (
    <div>
      {data.map((d, index) => {
        return <h5 key={index}>{d}</h5>;
      })}
    </div>
  );
}

export default memo(AnotherComponent);
