function TodoItem2() {
  let todoname = "study React";
  let tododate = "13/7/2025";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
