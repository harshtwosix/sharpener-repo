import './ExpenseForm.css'
import React  from 'react';


function ExpenseForm() {
    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    return (<div>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-1-1' max='2022-12-31' />
                </div>
            </div>
        </form>
        <div className='new-expense__actions'>
            <button type='submit'>Submit</button>
        </div>
    </div>
    )
}

export default ExpenseForm;
