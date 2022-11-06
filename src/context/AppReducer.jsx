import Transaction from "../components/Transaction";

export default (state, action)=>{
    switch (action.type) {
        case 'Delete_transaction':
            return {
                ...state,
                transactions : state.transactions.filter(transactions => 
                    transactions.id !== action.payload)
            }
            case 'Add_transaction':
                return {
                    ...state,
                    transactions : [action.payload, ...state.transactions]
                }
        default:
            return  state;
    }
}