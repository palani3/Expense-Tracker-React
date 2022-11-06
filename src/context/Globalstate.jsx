import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//InititalState 
const InititalState ={transactions:[]};
//Create Context 

export const GlobalContext = createContext(InititalState)

//provider components

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,InititalState)
    function deletetransaction(id){
        dispatch({
            type :'Delete_transaction',
            payload : id    
        });
    }

    function addTransaction(transaction){
        dispatch({
            type :'Add_transaction',payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,deletetransaction,addTransaction}}>{children}</GlobalContext.Provider>
    )
}


