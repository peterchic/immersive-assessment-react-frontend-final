import React, { Component } from 'react'
import Transaction from './Transaction'


class Transactions extends Component {

  render() {
    let transactions;

    if (this.props.activeCategory === "All") {
      transactions = this.props.transactions
    } else {
      transactions = this.props.transactions
        .filter(transaction => transaction.category === this.props.activeCategory)
    }

    transactions = transactions.map( transaction => <Transaction transaction={transaction}/>)


    return(
    <table>
      <tbody>
        <tr>
          <th>Posted At</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {transactions}
      </tbody>
    </table>
    )
  }
}

export default Transactions
