import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Addtransaction from './components/Addtransaction'
import Balance from './components/Balance'
import Income from './components/Income'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/Globalstate'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <GlobalProvider>
   <Header/>
   <Balance/>
   <Income/>
   

   <Addtransaction/>
   <TransactionList/>
   </GlobalProvider>

   </>
  )
}

export default App
