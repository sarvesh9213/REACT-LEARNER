import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeydown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeydown}
    />
  );
};
export default FoodInput;
// import styles from "./FoodInput.module.css";

// const Foodinput = () => {
//   return (
//     <input
//       type="text"
//       placeholder="Enter Food Item here"
//       className={styles.foodInput}
//       onChange={(event) => console.log(event)}
//     />
//   );
// };

// export default Foodinput;
