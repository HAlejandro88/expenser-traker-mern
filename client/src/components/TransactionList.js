import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {

    // @getTransactions para traer los data de lapeticion donde se vuelve el initialState
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>) )}
            </ul>   
        </>
    )
}
