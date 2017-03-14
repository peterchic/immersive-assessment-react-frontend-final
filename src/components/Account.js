import React, { Component } from 'react'
import Transactions from './Transactions'
import CategorySelector from './CategorySelector'

// The data you retrieve from the Rails API will be structured as follows:
// [
//   {
//     id: 1,
//     posted_at: "2017-02-28 11:00:00",
//     description: "Leather Pants, Gap co.",
//     category: "Fashion",
//     amount: -20000
//   },
//   {
//     id: 2,
//     posted_at: "2017-02-29 10:30:00",
//     description: "Paycheck from Bob's Burgers",
//     category: "Income",
//     amount: 100000
//   }
// ]
// You can use this dummy data to get the app up and running if you are
// unable to make the API call

class Account extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [],
      categories: [],
      activeCategory: "All"
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/transactions')
    .then((response) => {
       response.json().then((data) => {

         let categories = data.map(tr => tr.category)
           .filter((cat, i, all) => all.indexOf(cat) === i) // uniq it

         this.setState({
           transactions: data,
           categories
         })
       })
    })
  }


  handleChange(event) {
    this.setState({
      activeCategory: event.target.value
    })
  }

  render() {
    let { transactions, categories, activeCategory } = this.state

    return (
      <div>
        <CategorySelector categories={categories} activeCategory={activeCategory} handleChange={this.handleChange.bind(this)} />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions={transactions} activeCategory={activeCategory} />
      </div>
    )
  }
}

export default Account
