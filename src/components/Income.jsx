import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'

function moneyFormater(num){

    let  p = num.toFixed(2).split(".");
    return (
        "₹"+p[0].split("").reverse().reduce(function(acc,num,i,orig){
            return num == "-" ? acc : num +(i && ! (i % 3)? ",":'')+ acc;
        },"")+"."+p[1]
    );
}

export default function Income() {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((transaction)=>transaction.amount);
    const income = amounts.filter((item)=>  item>0).reduce((acc,item)=>(acc += item),0);
    const expense = amounts.filter((item)=>  item<0).reduce((acc,item)=>(acc += item),0) * -1;
  return (
    <div className='col flex '>
        <div className='row  justify-content-md-center'>
    <div className='card mt-2'>
    <div className="card-body">
        <h4 className='card-title'>Income</h4>
        <p className='card-text'>{moneyFormater(income)}</p>
        </div>
    </div>
     <div className='card mt-2  '>
     <div className="card-body">
        <h4 className='card-title'>Expense</h4>
        <p className='card-text'>{moneyFormater(expense)}</p>
        </div>
    </div>
    </div>

    </div>
  )
}
