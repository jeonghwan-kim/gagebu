import * as React from 'react'
import request from 'superagent'
import { User, Expense, Layout } from 'dto';
import ExpenseListPage from 'client/pages/ExpenseList';
import { connect } from 'react-redux';
import { RootState } from 'client/reducers';
import { fetchExpenseList, setLayout } from 'client/actions'
import { FetchExpenseListAction } from 'client/reducers/expense';
import { Icon } from 'antd-mobile';
import { push  } from "connected-react-router";

interface Props {
  expenses: Expense[]
  setLayout(layout: Layout): void
  push(url: string): void
  fetchExpenseList(): FetchExpenseListAction
}

interface State {
  user: User
}

class ExpenseListContainer extends React.Component<Props, State> {
  readonly state = {
    user: {
      name: 'anonymose',
    },
  }

  componentDidMount() {
    const {setLayout, fetchExpenseList} = this.props;

    setLayout({
      title: '2019년 7월 지출',
      rightControls: [
        <Icon key="0" type="plus" onClick={() =>
          this.props.push('/expense/add')
        } />
      ]
    })
    fetchExpenseList()
  }

  render() {
    return <ExpenseListPage {...this.props} />
  }
}

export default connect(
  (state: RootState) => ({
    expenses: state.expense
  }),
  { fetchExpenseList, setLayout, push }
)(ExpenseListContainer)

