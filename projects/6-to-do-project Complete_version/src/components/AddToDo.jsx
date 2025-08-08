import styles from "./AddToDo.module.css";
function AddTodo({ onkeydown, changeDueDate }) {
  return (
    <div className="container text-center ">
      <div className={"row kg-row ${styles.inputContainer}"}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onKeyDown={onkeydown}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
