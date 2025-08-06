import { useRef, useEffect, useState } from "react";
import styles from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayVal}
        readOnly
      />
    </div>
  );
};

export default Display;
