import {useState} from "react";


const useNumberList = (initialArray: number[]) => {
  const [list,setList]=useState<number[]>(initialArray);
  const appendStart=(val:number)=>{
     initialArray.unshift(val);
     setList([...initialArray]);  
  }

  const appendEnd=(val:number)=>{
      initialArray.push(val);
      setList([...initialArray]);
  }

  const popStart=()=>{
    initialArray.shift();
    setList([...initialArray]);
  }

  const popEnd=()=>{
    list.pop();
    setList([...list]); 
  }
  const clear=()=>{
    setList([]);
  }
  const reset=(arr:number[])=>{
    console.log(arr);
    
    setList([...arr]);
  }

  return {list,appendStart,appendEnd,popStart,popEnd,clear,reset}
};

export default useNumberList;
