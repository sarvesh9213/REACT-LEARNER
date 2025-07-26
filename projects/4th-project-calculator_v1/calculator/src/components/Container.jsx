import styles from "./Container.module.css";
import Button from "./Button";
const Container = () => {
  return (
    <div className={styles["button-container"]}>
      <Button></Button>
    </div>
  );
};
export default Container;
