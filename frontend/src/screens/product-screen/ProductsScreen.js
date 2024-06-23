import React from "react"
import products from "../../Products"

const ProductsScreen = (match) => {
  const productId = match.params.id
  const product = products.find((product) => product.id === productId)
  return <div>ProductsScreen</div>
}

export default ProductsScreen
