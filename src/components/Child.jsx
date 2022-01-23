import React from "react";

const Child = ({textFromParent, onClickText}) => {

const textFromChild = 'Here is Your Child Bernd'

  return <div className="Child">


    <p>{textFromParent}</p>
    <button onClick={() => onClickText(textFromChild)}></button>

  </div>;
};

export default Child;
