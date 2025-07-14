function TodoItem1() {
  let todoname = "buy milk";
  let tododate = "13/7/2025";
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger mybutton">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
