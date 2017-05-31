import React from 'react'
import CategoryField from './CategoryField'

// We have provided this Array of categories for you,
// in a real application you might retrieve this data from
// your backend

const categories = [
  "All",
  "Entertainment",
  "Income",
  "Food",
  "Fashion",
  "Gift",
  "ATM",
  "Transportation",
  "Housing",
  "Misery"
]

const CategorySelector = (props) => {

  const categoryFields = categories.map(
    (category, i) => {

      const checked = category === props.activeCategory

      return (
        <CategoryField
          key={ i }
          checked={ checked }
          category={ category }
          handleChange={ props.handleChange }
        />
      )
    }
  )


  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          { categoryFields }
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
