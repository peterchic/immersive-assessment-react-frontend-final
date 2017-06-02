import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "Food"
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(dataObj => this.setState({
        transactions: dataObj
      }))
      // , this.filtered
  }

  handleChange(category) {
    this.setState({
      activeCategory: category
    })
  }

  // filtered(){
  //   this.state.transactions.filter((trans)=>{
  //     trans.category === this.state.activeCategory
  //   } )
  // }

  render() {
    // console.log(this.state.transactions);
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={this.handleChange.bind(this)}
        />

        <TransactionsList
          transactions={ displayedTransactions }
          active={this.state.activeCategory}
        />

      </div>
    )
  }
}

export default AccountContainer
