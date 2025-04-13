import React, { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}><strong>Increase</strong></button>
      <button onClick={() => setCount(count - 1)}><strong>Decrease</strong></button>
    </div>
  );
}

export default Counter1;
