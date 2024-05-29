import { BsFillStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import React from "react"
import products from "../Products"
const HomeScreen = () => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div>
            <img style={{ width: "200px", height: "200px" }} src={product.image} />
            <div>
              <BsStarHalf />
              <BsFillStarFill />
              {product.rating}
            </div>
            <div  className="name">{product.name}</div>
            <div>{product.reviews}</div>
            <div>{product.price}</div>

            <div>{product.category}</div>
            <div>{product.countInStock}</div>
          </div>
        )
      })} 
    </div>
  )
}

export default HomeScreen
