import { useRef, useEffect, useState } from "react";
import styles from "./Display.module.css";

const Display = ({ value = "", isUpdating = false, isError = false }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isUpdating && inputRef.current) {
      inputRef.current.classList.add(styles.updating);
      const timer = setTimeout(() => {
        inputRef.current.classList.remove(styles.updating);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isUpdating]);

  useEffect(() => {
    if (isError && inputRef.current) {
      inputRef.current.classList.add(styles.error);
      const timer = setTimeout(() => {
        inputRef.current.classList.remove(styles.error);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  return (
    <div>
      <input
        ref={inputRef}
        className={styles.display}
        type="text"
        value={value}
        readOnly
      />
    </div>
  );
};

export default Display;
