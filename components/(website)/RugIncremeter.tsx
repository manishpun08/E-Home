"use client";
import React, { useState } from "react";

const RugIncremeter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      className="w-full rounded-full p-2 text-center flex items-center justify-between my-4"
      style={{ background: "#2A2A2A", color: "#fff" }}
    >
      <button
        className="pl-5 text-xl font-bold"
        onClick={handleDecrement}
        disabled={count <= 1}
      >
        -
      </button>
      <span className=" text-xl">{count}</span>
      <button className="pr-5 text-xl font-bold" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default RugIncremeter;
