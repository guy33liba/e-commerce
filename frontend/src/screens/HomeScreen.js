import React from "react"
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import products from "../Products"

const HomeScreen = () => {
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
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <img style={{ width: "200px", height: "200px" }} src={product.image} alt={product.name} />
          <div>
            {renderStars(product.rating)}
            {product.rating}
          </div>
          <div className="name">{product.name}</div>
          <div>{product.reviews}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.countInStock}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeScreen
