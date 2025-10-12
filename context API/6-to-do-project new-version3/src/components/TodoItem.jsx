import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { RiDeleteBin6Line } from "react-icons/ri";
function TodoItem({ todoName, todoDate }) {
  const { DeleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => DeleteItem(todoName)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
