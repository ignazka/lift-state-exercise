import React from "react";

const Output = ({ textForOutput }) => {
  return (
    <div className="Output">
      {textForOutput.map((listEntry) => {
        return <li>{listEntry}</li>;
      })}
    </div>
  );
};

export default Output;
