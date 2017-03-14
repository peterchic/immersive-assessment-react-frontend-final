import React from 'react'

const CategorySelector = (props) => {

  let categories = props.transactions
    .map( transaction => transaction.category )
    .filter( (cat, i, all) => all.indexOf(cat) === i) // unique list of categories

  return (
    <div>
      <div className="category-button">
        <input type="radio" name="category" value="All" id="All" checked={props.activeCategory === "All"}/>
        <label htmlFor="All">All</label>
      </div>
    </div>
  )
}

export default CategorySelector
