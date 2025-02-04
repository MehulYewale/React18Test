import { useEffect, useState } from "react";

const useTimer = () => {
  const [value, setValue] = useState(1);
  const [isStarted, setStart] = useState(false);
  useEffect(() => {
    let timer;
    if (isStarted) {
      timer = setTimeout(() => {
        setValue(value !== 250 ? value + 1 : 1);
      }, 3500);
    }
    return () => timer && clearTimeout(timer);
  }, [isStarted, value]);

  const start = () => setStart(true);
  const stop = () => setStart(false);
  const next = () => setValue(value !== 250 ? value + 1 : 1);
  const previous = () => setValue(value !== 1 ? value - 1 : 250);
  const reset = () => setValue(1);

  return { value, isStarted, next, previous, start, stop, reset };
};

export default useTimer;
