import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'
import Transaction from './Transaction'

export default function TransactionList() {
    const {transactions}=useContext(GlobalContext)
  return (
    <div>
     
        <h5>History</h5>
        <ul className='list'> {transactions.map((transaction)=>(
            <Transaction key={transaction.id} transaction={transaction}/>
        ))}</ul>
        </div>
  )
}
