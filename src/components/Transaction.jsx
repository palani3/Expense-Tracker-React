import React,{useContext} from 'react'
import { GlobalContext } from '../context/Globalstate';


function moneyFormater(num){

    let  p = num.toFixed(2).split(".");
    return (
        ""+p[0].split("").reverse().reduce(function(acc,num,i,orgin){
            return num == "-" ? acc : num +(i && ! (i % 3)? ",":'')+acc
        },"")+"."+p[1]
    )
}

export default function Transaction({transaction}) {
    const {deletetransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? "-":"+";
  return (
    
    <li className={transaction.amount < 0 ? "Minus" : " Plus"}>
        {transaction.text}<span>
           {sign} {moneyFormater(transaction.amount)}
        </span>
        <button onClick={ ()=> deletetransaction(transaction.id)}>X</button>
    </li>

  )
}
