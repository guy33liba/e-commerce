import React, { useEffect, useState } from "react"
import "./HomeScreen.css" // Adjust this path based on your project structure
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import axios from "axios"
const HomeScreens = () => {
  const [expandedItems, setExpandedItems] = useState({}) // State to track expanded descriptions
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:4000/products")
    console.log(data)
    setProducts(data)
  }
  const renderStars = (rating) => {
    debugger
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
  useEffect(() => {
    getProducts()
  }, [])
  console.log(products)
  return (
    <div className="product-list">
      {products?.map((item, index) => (
        <div className="product-card" key={index}>
          <img className="product-image" src={item.image} alt={item.name} />
          <div className="product-details">
            <div className="product-price">Price: ${item.price}</div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeScreens

// const truncateDescription = (description, maxLength) => {
//   if (description.length <= maxLength) {
//     return description
//   }
//   return `${description.substring(0, maxLength)}...`
// }
// const toggleDescription = (index) => {
//   setExpandedItems((prevExpandedItems) => ({
//     ...prevExpandedItems,
//     [index]: !prevExpandedItems[index], // Toggle expanded state for specific index
//   }))
// }

// const undoDescription = (index) => {
//   setExpandedItems((prevExpandedItems) => ({
//     ...prevExpandedItems,
//     [index]: false, // Set expanded state to false for specific index (undo)
//   }))
// }
