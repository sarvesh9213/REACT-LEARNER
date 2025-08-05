function AddToDO() {
  return (
    <div class="container text-center">
      <div class="row my-row">
        <div class="col-6">
          <input type="text" placeholder="ENTER-TASK" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success mybutton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDO;
