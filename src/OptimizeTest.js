import React, { useState, useEffect } from "react";

const Textview = ({ text }) => {
  return <div>{text}</div>;
};

const CountView = ({ count }) => {
  return <div>{count}</div>;
};

const OptimizeTest = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
