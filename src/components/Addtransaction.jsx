import React ,{useState,useContext}from "react";
import { GlobalContext } from "../context/Globalstate";


export default function Addtransaction() {
    const [text ,settext] = useState("");
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)
    function onSubmitData(e){
        e.preventDefault();
  
     
        console.log('You clicked submit.');
        console.log("update")
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount:+amount,
        };
        addTransaction(newTransaction); 
    }

  return (
    <div>
      <h1>Addtransaction</h1>
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
  );
}
