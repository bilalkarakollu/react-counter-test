import React from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1 className={styles.counter}>Counter</h1>
      <div className={styles.container}>
        <button data-testid="decrement-btn" className={styles.button} onClick={decrement}>
          -
        </button>
        <span data-testid="count" className={styles.count}>{count}</span>
        <button data-testid="increment-btn" className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
