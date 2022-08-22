import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
  label:string
};

const Clock = ({label}: Props) => {
  const {hours,minutes,seconds}=useClock();
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {label}
      </h4>
      <span data-testid="clock-hours">
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
