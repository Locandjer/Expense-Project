import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 5,
    date: new Date(2023, 6, 20)
  },
  {
    id: 'e2',
    title: 'Raw ham',
    amount: 8,
    date: new Date(2023, 5, 18)
  },
  {
    id: 'e3',
    title: 'Turkey',
    amount: 13,
    date: new Date(2023, 4, 15)
  },
  {
    id: 'e4',
    title: 'Chicken Little',
    amount: 21,
    date: new Date(2023, 3, 11)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
//chiedere a greg da dove viene prevExpenses tra le tonde
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}



export default App;
