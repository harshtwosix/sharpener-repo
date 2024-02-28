import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
    LocationOfExpenditure: 'hygene'
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: "electronic" },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: 'insurance'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: 'furniture'
  },
];
function App() {
     const [expenses,setNewExpenses]=useState(DUMMY_EXPENSES);
    

    const AddExpenseHandler=(expensesData)=>{
        setNewExpenses((prevExpenses)=>{
          return [expensesData,...prevExpenses]
        })
    }
      
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler}/>
     <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
