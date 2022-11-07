import React ,{useState,useContext}from "react";
import { GlobalContext } from "../context/Globalstate";


export default function Addtransaction() {
    const [text ,settext] = useState("");
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)
    function onSubmitData(e){
        e.preventDefault();
  
     
   
        console.log("update")
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount:+amount,
        };
        addTransaction(newTransaction); 
        amount
      settext("")



 
    }

  return (
    <div classname="container text-center ">
      <div className="row justify-content-md-center">
        <div className="col-md-12 px-5">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmitData}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="titles"
            value={text}
           
            placeholder="Title"
            onChange={(e)=>{settext(e.target.value)}}
          />
          <label htmlFor="title">Enter Title </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="amount"
            name="Amounts"
          

           
            placeholder="Amount"
            onChange={(e)=>{setAmount(e.target.value)}}
          />
          <label className="strong" htmlFor="amount">
            (<b>-</b>&nbsp;<b>+</b>)Enter Amount &nbsp;&nbsp; [ Expense ,
            Income]
          </label>
        </div>
       
          
        <button   className="btn btn-outline-primary">
          Add Transaction
        </button>
   
      </form>
      </div>
    </div>
    </div>
  );
}
