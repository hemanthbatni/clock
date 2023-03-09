import { useState, useEffect } from "react";
import { handleDate } from "./utils";

export const useHandleTime = () => {
  const [time, setTime] = useState(handleDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTime(handleDate(new Date())), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return time;
};
