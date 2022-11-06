import React from "react";

export default function Addtransaction() {
  return (
    <div>
      <h1>Addtransaction</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
          />
          <label htmlFor="title">Enter Title </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Amount"
          />
          <label className="strong" htmlFor="amount">
            (<b>-</b>&nbsp;<b>+</b>)Enter Amount &nbsp;&nbsp; [ Expense ,
            Income]
          </label>
        </div>
        <button type="button" className="btn btn-outline-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
