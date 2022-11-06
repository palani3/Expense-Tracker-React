import React,{createContext,useReducer} from "react";

//InititalState 
const InititalState =[
        {id:1,Label:"floer",amount:-20},
        {id:1,Label:"buying pen",amount:-20},
        {id:1,Label:"car wash",amount:500},
        {id:1,Label:"chocolate",amount:-200}
];
//Create Context 

export const GlobalContext = createContext(InititalState)

//provider components

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(InititalState)

    return (
        <GlobalContext.Provider>{children}</GlobalContext.Provider>
    )
}


