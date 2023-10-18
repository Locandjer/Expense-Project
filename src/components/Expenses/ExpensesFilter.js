import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log(event.target.value);
  };

 

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='ragazza'>2022</option>
          <option value='una'>2021</option>
          <option value='sei'>2020</option>
          <option value='noemi'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;