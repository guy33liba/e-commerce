import mongoose from "mongoose"
import products from "../Products.js"
import express from "express"

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
  rating: Number,
})

const Product = mongoose.model("Product", productSchema)

// Function to seed initial data into the database
export const seedDatabase = async () => {
  try {
    await Product.deleteMany() // Clear existing data

    await Product.insertMany(products)
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

// Seed the database on server startup

const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
  console.log("hello")
  try {
    const newProductList = await Product.find({})
    res.send(newProductList)
  } catch (error) {
    console.log(error.message)
  }
})

export default productRouter
