import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
// addExpense -> water bill
store.dispatch(addExpense({description: 'water bill'}));
// addExpense -> gas bill
store.dispatch(addExpense({description: 'gas bill'}));
// setTextFilter -> bill
store.dispatch(setTextFilter('bill'));
// getVisibleExpenses -> print to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));