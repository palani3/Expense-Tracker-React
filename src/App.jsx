import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Addtransaction from './components/Addtransaction'
import Balance from './components/Balance'
import Income from './components/Income'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/Globalstate'
import Transaction from './components/Transaction'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <GlobalProvider>
    <Header/>
   <div className='container text-center'>
    <div className='row mt-5 justify-content-md-center'>
      <div className='col-md-6'> <Balance/><Income/></div>
      <div className='col-md-6'> <Addtransaction/> </div>
   
   <div className='col-10 mt-5'>   
   <TransactionList/></div>

    </div>
   </div>
  

   {/* <Transaction/> */}
   

 



   </GlobalProvider>

   </>
  )
}

export default App
