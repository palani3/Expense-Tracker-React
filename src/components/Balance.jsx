import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'


function moneyFormater(num){

    let  p = num.toFixed(2).split(".");
    return (
        "₹"+p[0].split("").reverse().reduce(function(acc,num,i,orgin){
            return num == "-" ? acc : num +(i && ! (i % 3)? ",":'')+acc
        },"")+"."+p[1]
    )
}

export default function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map((transaction)=> transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc +=item),0);
  return (
    <>
   <div classname="container text-center ">
      <div className="row justify-content-md-center">
        <div className="col-md-12 px-5">
    <h4 className='text-primary text-center'>Balance</h4>
    <h1 className={total < 0 ? "text-danger" : " text-success"}  >{total <0 ? "-":"+"}{moneyFormater(total)}</h1>
    </div>
    </div>
    </div>
    </>
  )
}
