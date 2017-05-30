import React from 'react'

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

  const categoryFields = categories.map( category => {
    return (
      <div className="field">
        <div className="ui segment mini">
          <div className="ui radio checkbox">

            <input
              type="radio"
              name="category"
              id={ category }
              checked={ props.activeCategory === category }
            />
            <label>{ category }</label>

          </div>
        </div>
      </div>
    )
  })


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
