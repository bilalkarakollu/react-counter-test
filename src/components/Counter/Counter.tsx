import React from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <div>
      <h1 className={styles.counter}>Counter</h1>
      <button className={styles.button}>-</button>
      <span className={styles.count}>0</span>
      <button className={styles.button}>+</button>
    </div>
  );
};

export default Counter;
