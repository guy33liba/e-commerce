import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/products", async (req, res) => {
  try {
    // Fetch all products from the database
    const allProducts = await Product.find()

    // Send the entire products array as JSON response
    res.json(allProducts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
app.listen(4000, console.log("online"))
