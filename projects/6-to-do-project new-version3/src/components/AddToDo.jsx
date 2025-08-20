import styles from "./AddToDo.module.css";
function AddTodo({ OnNewItem }) {
  const handleNameChange = (event) => {
    console.log("Name changed:", event.target.value);
  };
  const handleDateChange = (event) => {
    console.log("Date changed:", event.target.value);
  };
  return (
    <div className="container text-center ">
      <div className={"row kg-row ${styles.inputContainer}"}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => OnNewItem("Sample Todo", "2023-10-04")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
