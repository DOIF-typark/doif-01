import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = (a) => {
      setNumber(number + 1 + a);
    };

    const onDecrease = () => {
      setNumber(number - 1);
    };

  return (
  <div>
      <div>현재 숫자:{number}</div>
      <button onClick={()=> onIncrease(10)}>+1</button>
      <button onClick={onDecrease}>-1</button>
  </div>
  );
}

export default Counter;
