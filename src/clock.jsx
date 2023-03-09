import React from "react";
import { useHandleTime } from "./useHandleTime";

export const Clock = () => {
  const { hours, minutes, seconds } = useHandleTime();
  return (
    <div className="clock">
      <div className="analog">
        <div
          className="hour_hand"
          style={{
            rotate: `${hours * 30}deg`,
          }}
        />
        <div
          className="min_hand"
          style={{
            rotate: `${minutes * 6}deg`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            rotate: `${seconds * 6}deg`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">.</span>
        <span className="two">.</span>
        <span className="three">3</span>
        <span className="four">.</span>
        <span className="five">.</span>
        <span className="six">6</span>
        <span className="seven">.</span>
        <span className="eight">.</span>
        <span className="nine">9</span>
        <span className="ten">.</span>
        <span className="eleven">.</span>
      </div>
      <div className="digital">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};
