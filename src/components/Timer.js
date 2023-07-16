import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Timer = () => {
  const { isRunning, elapsedTime } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval((index) => {
        // disptach incrementTimer action here
        dispatch(incrementTimer(index));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return <b>{elapsedTime}</b>;
};
