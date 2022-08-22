import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialValue:number[],
  label:string
};
const List2 = ({label,initialValue}: List2Props) => {
  const [val,setVal]=useState<number|string>();

  const {list,appendEnd,popStart,clear,reset}=useNumberList(initialValue);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     setVal(e.target.value);
  }
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{label}</h3>
      <div className="flex">
      {/* Iterate List and wrap the element div below inside */}
      {list.map((item,index)=>(
      <div key={index} data-testid="list2-element" >{/* Each element in a list */}
           {item}
      </div>
      ))}
      </div>

      <input data-testid="list2-input" type="number" onChange={handleChange}/>


      <button data-testid="list2-btn-append-end" onClick={()=>appendEnd(Number(val))}>
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={()=>popStart()}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={()=>clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={()=>reset([4,5])}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
