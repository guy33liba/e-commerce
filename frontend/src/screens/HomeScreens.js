import React, { useState } from "react"
import products from "../Products"
import "./HomeScreen.css" // Adjust this path based on your project structure

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description
  }
  return `${description.substring(0, maxLength)}...`
}

const HomeScreens = () => {
  const [expandedItems, setExpandedItems] = useState({}) // State to track expanded descriptions

  const toggleDescription = (index) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [index]: !prevExpandedItems[index], // Toggle expanded state for specific index
    }))
  }

  const undoDescription = (index) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [index]: false, // Set expanded state to false for specific index (undo)
    }))
  }

  return (
    <div className="product-list">
      {products.map((item, index) => (
        <div className="product-card" key={index}>
          <img className="product-image" src={item.image} alt={item.name} />
          <div className="product-details">
            <div className="product-name">{item.name}</div>
            <div className="product-reviews">Reviews: {item.reviews}</div>
            <div className="product-price">Price: ${item.price}</div>
            <div className="product-stock">Stock: {item.countInStock}</div>
            <div className="product-category">Category: {item.category}</div>
            <div className="product-description">
              {expandedItems[index] ? item.description : truncateDescription(item.description, 200)}
              {/* Conditional rendering for "Read more" and "Undo" buttons */}
              {!expandedItems[index] && item.description.length > 200 && (
                <button className="read-more" onClick={() => toggleDescription(index)}>
                  Read more
                </button>
              )}
              {expandedItems[index] && (
                <button className="undo" onClick={() => undoDescription(index)}>
                  close
                </button>
              )}
            </div>
            <div className="product-rating">Rating: {item.rating}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeScreens
