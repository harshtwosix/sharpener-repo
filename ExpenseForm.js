import './ExpenseForm.css'
import React,{useState}  from 'react';


function ExpenseForm() {
    /*
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    */
     //OR WE CAN USE useState ONE TIME IN FOLLOWING SYNTAX
   const [userInput,setUserInput]=useState({
       enteredTitle:'',
       enteredAmount:'',
       enteredDate:''
   })
    const titleChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value,
        })
    }
    const amountChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value,
        })
    }
    const dateChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredDate:event.target.value,
        })
    }

    const submiteventhandler=(event)=>{
       event.preventDefault()

       const expenseData={
        title:userInput.enteredTitle,
        amount:userInput.enteredAmount,
        date:new Date(userInput.enteredDate)
       }
        console.log('clicking')
       console.log(expenseData);
    }
    
    
  
    return (<div>
        <form onSubmit={submiteventhandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className='new-expense__controls'>
                    <label>Date </label>
                    <input type='date' onChange={dateChangeHandler} min='2019-1-1' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Submit</button>
        </div>
        </form>
        
    </div>
    )
}

export default ExpenseForm;
