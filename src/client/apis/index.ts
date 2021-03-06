import superagent from 'superagent'
import { Expense } from 'dto';

export const fetchExpenseList = () => 
  superagent.get('/api/expenses').then(res => res.body)

export const fetchExpense = (id: string) => 
  superagent.get(`/api/expenses/${id}`).then(res => res.body)

export const addExpense = (expense: Expense) => 
  superagent.post('/api/expenses').send(expense).then(res => res.body)

export const editExpense = (expense: Expense) => 
  superagent.put(`/api/expenses/${expense.id}`).send(expense).then(res => res.body)

export const deleteExpense = (id: string) =>
  superagent.delete(`/api/expenses/${id}`).then(res => res.body)