import React, { memo } from "react";

function AnotherComponent({ data }) {
  console.log("AnotherComponent is being rendered");
  return (
    <div>
      {data.map((d, index) => {
        return <h6 key={index}>{d}</h6>;
      })}
    </div>
  );
}

export default memo(AnotherComponent);
