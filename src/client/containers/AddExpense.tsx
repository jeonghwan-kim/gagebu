import * as React from 'react'
import AddExpensePage from 'client/pages/AddExpense'
import { Expense, Layout } from '../../server/DTOModels';
import {AddExpenseAction} from '../reducers/expense'
import {addExpense, setLayout} from '../actions'
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { Icon } from 'antd-mobile';
import { push, goBack } from "connected-react-router";


interface Props {
  setLayout(layout: Layout): void
  push(path: string): void
  goBack(): void
  addExpense(expense: Expense): AddExpenseAction
}

class AddExpenseContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.setLayout({
      title: '지출 기록',
    })
  }

  render() {
    return <AddExpensePage {...this.props}/>
  }
}

export default connect(
  (state: RootState) => ({

  }),
  { addExpense, setLayout, push, goBack }
)(AddExpenseContainer)