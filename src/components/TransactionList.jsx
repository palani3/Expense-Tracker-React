import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
      <div className="col-12">
      <h5 className="text-center text-primary">Payment History</h5>
      <table className="table">
        <thead className="text-center">
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Title</th>
            <th scope="col" className="col-md-1 w-25">
              Plus or Minus
            </th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
      </table>
     

        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
   

      
     
    </div>
  );
}
