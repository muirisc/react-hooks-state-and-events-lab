import React, { useState } from "react";

function Item({ name, category }) {

const [isOn, setIsOn] = useState(false);
  
function handleClick(){
    setIsOn((isOn) => !isOn);
  }
  const appClass = isOn ? "in-cart" : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
