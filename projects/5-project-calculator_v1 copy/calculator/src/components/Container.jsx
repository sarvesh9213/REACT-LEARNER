import styles from "./Container.module.css";
import Button from "./Button";
const Container = ({ onButtonClicked }) => {
  return (
    <div className={styles["button-container"]}>
      <Button onButtonClicked={onButtonClicked}></Button>
    </div>
  );
};
export default Container;
