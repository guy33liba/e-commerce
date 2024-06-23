import React, { useState } from "react"
import products from "../../Products"
import "./HomeScreen.css" // Adjust this path based on your project structure
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs"

const HomeScreens = () => {
  const [expandedItems, setExpandedItems] = useState({}) // State to track expanded descriptions

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description
    }
    return `${description.substring(0, maxLength)}...`
  }
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
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <BsFillStarFill key={`full-${index}`} />
        ))}
        {halfStar && <BsStarHalf />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={`empty-${index}`} />
        ))}
      </>
    )
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
              <br />
              {expandedItems[index] ? item.description : truncateDescription(item.description, 200)}
              {/* Conditional rendering for "Read more" and "Undo" buttons */}
              {!expandedItems[index] && item.description.length > 200 && (
                <button className="read-more" onClick={() => toggleDescription(index)}>
                  Read More...
                </button>
              )}
              <br />
              {expandedItems[index] && (
                <button className="undo" onClick={() => undoDescription(index)}>
                  close
                </button>
              )}
              <div className="product-rating">Rating: {renderStars(item.rating)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeScreens
