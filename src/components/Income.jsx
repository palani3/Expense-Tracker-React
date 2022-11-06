import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'

function moneyFormater(num){

    let  p = num.toFixed(2).split(".");
    return (
        ""+p[0].split("").reverse().reduce(function(acc,num,i,orgin){
            return num == "-" ? acc : num +(i && ! (i % 3)? ",":'')+acc
        },"")+"."+p[1]
    )
}

export default function Income() {
    const {transactions} = useContext(GlobalContext);
    const {amounts} = transactions.map((transaction)=>transaction.amount);
    const income = amounts
    const expense = amounts
  return (
    <>
    <div>
        <h4>Income</h4>
        <p className='money plus'>{income}</p>
    </div>
     <div>
        <h4>Expense</h4>
        <p className='money minus'>{expense}</p>
    </div>

    </>
  )
}
