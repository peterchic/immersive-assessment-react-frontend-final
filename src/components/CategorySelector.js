import React from 'react'

const CategorySelector = ({activeCategory, categories, handleChange}) => {
  let categoryButtons = categories.map((category, i) => {
    return (
      <div className="category-button" key={i}>
        <input onChange={(ev) => handleChange(ev)} type="radio" name="category" value={category} id={category} checked={activeCategory === category}/>
        <label htmlFor={category}>{category}</label>
      </div>
    )
  })

  return (
    <div>
      <div className="category-button">
        <input onChange={(ev) => handleChange(ev)} type="radio" name="category" value="All" id="All" checked={activeCategory === "All"}/>
        <label htmlFor="All">All</label>
      </div>
      { categoryButtons }
    </div>
  )
}


export default CategorySelector
