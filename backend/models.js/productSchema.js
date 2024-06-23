import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
})

const Product = mongoose.model("Product", productSchema)
export default Product
