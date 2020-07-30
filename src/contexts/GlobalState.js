import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state which is an Object
const initialState = {
    transactions: []
}

//Create the Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

// Action reducer
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload:id
    });
}
function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload:transaction
    });
}

    return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
    }}>{/**provider takes a value as object */}

            {children}
        </GlobalContext.Provider>)
}

