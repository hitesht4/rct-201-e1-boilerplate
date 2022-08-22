import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label:string,
  initialValue:number[],
};
const List1 = ({label,initialValue}: List1Props) => {
  const [val,setVal]=useState<number|string>();
  const {list,appendStart,popEnd,clear,reset}=useNumberList(initialValue);


  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setVal(e.target.value);
  }


  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{label}</h3>
      <div className="flex">
      {list.map((item,index)=>(
      <div key={index} data-testid="list1-element" >
        {item} 
      </div> 
       ))}
      </div>
      <input data-testid="list1-input" type="number" onChange={handleChange}/>

      <button data-testid="list1-btn-append-start" onClick={()=>appendStart(Number(val))}>
        Append Start
      </button>

      <button data-testid="list1-btn-pop-end" onClick={()=>popEnd()}>
        
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={()=>clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={()=>reset([1,2,3])}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
