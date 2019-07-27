import * as React from 'react'
import request from 'superagent'
import { User, Expense } from '../server/models';
import { Button, Icon, Skeleton } from 'antd';

interface State {
  user: User
  expenses: Expense[]
}

class App extends React.Component<any, State> {
  readonly state = {
    user: {
      name: 'anonymose',
    },
    expenses: [],
  }

  componentDidMount() {
    request.get('/api/users/me').then(res => {
      this.setState({
        user: res.body
      })
    })

    request.get('/api/expenses').then(res => {
      this.setState({
        expenses: res.body
      })
    })
  }

  render() {
    return (
      <div>
        사용자 이름: {this.state.user.name}
        <ul>{
          this.state.expenses.map(((expense: Expense, idx)=> {
            return <li key={idx}>{expense.text} {expense.amount}</li>
          }))
        }</ul>
        <Button type="primary"><Icon type="plus" /> 확인</Button>
      </div>
    )
  }
}

export default App
