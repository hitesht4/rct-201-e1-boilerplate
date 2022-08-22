import {useState,useEffect} from "react";

const useClock = () => {
  const [clock,setClock]=useState(new Date());


  useEffect(()=>{
    let time=setInterval(()=>{
       setClock(new Date());
    },1000);


    return ()=>clearInterval(time);
  })

  return {
    hours:clock.getHours(),
    minutes:clock.getMinutes(),
    seconds:clock.getSeconds(),
  }
  // TODO
  // refer readme.md for what to return
};

export default useClock;
