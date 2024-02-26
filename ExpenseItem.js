import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import ExpensePrice from './ExpensePrice';
import ExpenseTime from './Expensetime';
import React, { useState } from 'react';
 

function ExpenseItem(props){
    
    const [amount,setAmount]=useState(props.amount)


    const clickHandler=()=>{
        setAmount('100');
    }
    return (
        <div className='expense-item'>
           <ExpenseTime date={props.date}></ExpenseTime>
            <div className='expense-item__description'>
               <ExpenseDetails title={props.title}></ExpenseDetails>
                <div className='expense-item__price'><ExpensePrice amount={amount}></ExpensePrice></div>
                <button onClick={clickHandler}>click</button>
            </div>
        </div>
    
    );
}


export default ExpenseItem