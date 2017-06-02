import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  console.log('ok', props.activeCategory);
  // Attempt 1
  const filteredTransactions = props.transactions.filter((transaction) => {
    return transaction.category === props.activeCategory
  })

  // Attempt 2
  // const filteredTransactions = props.transactions.filter((transaction) => {
  //   return transaction.category.includes(props.activeCategory)
  // })

  const displayedTransactions = props.transactions.map((transaction) => {
    return <Transaction transaction={transaction} />
  })

  // console.log('list:', filteredTransactions )
  //This keeps coming back unefined. Attempted if statements and ternary to fix issue.

  // if(!props.transactions){
  //   return null
  // } else {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {displayedTransactions}

      </tbody>
    </table>
  )
}
// }

export default TransactionsList
