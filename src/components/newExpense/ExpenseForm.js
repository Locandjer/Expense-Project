import { useState } from 'react';
import './expenseForm.css';


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(insertCurrentDate);

    const titleChangeHandler = (event) => {
        console.log(event)
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate(insertCurrentDate);

        

    };

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth()+1).toString().padStart(2, '0'); 
        const day = (today.getDate()+1).toString().padStart(2, '0');  
        
        console.log(day);
        if (typeof day === "string") {
            console.log("La variabile è di tipo string.");
          } else if (typeof day === "number") {
            console.log("La variabile è di tipo number.");
          } else {
            console.log("La variabile non è di tipo string né number.");
          }
       
          console.log('cc: ',day)
        return `${year}-${month}-${day}`;
    }

    function insertCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth()+1).toString().padStart(2, '0');  
        const day = today.getDate().toString().padStart(2, '0');  
        const day1 = today.getDate();
        
        console.log(day1);
        if (typeof day1 === "string") {
            console.log("La variabile è di tipo string.");
          } else if (typeof day1 === "number") {
            console.log("La variabile è di tipo number.");
          } else {
            console.log("La variabile non è di tipo string né number.");
          }
        return `${year}-${month}-${day}`;
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2000-01-01" max={getCurrentDate()}  value={enteredDate || insertCurrentDate()} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;