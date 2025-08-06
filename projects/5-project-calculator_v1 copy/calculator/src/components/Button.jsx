import styles from "./Button.module.css";
const Button = ({ onButtonClicked }) => {
  const Buttonnames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      {Buttonnames.map((buttonName) => (
        <button
          className={styles.button}
          key={buttonName}
          onClick={() => onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Button;
