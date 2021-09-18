import React, { useCallback, useState } from "react";

const Uc = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prevCounter=>prevCounter + 1);
  },[]);
  function restart() {
    setCounter(0);
  }
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  console.log(counter)

  return (
    <div>
      {counter}
      <button onClick={increment}>+</button>
      <button onClick={restart}>restart</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Uc;
