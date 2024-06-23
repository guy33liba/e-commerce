import express from "express"
import cors from "cors"
import productRouter, { seedDatabase } from "./routes/productsRoute.js"
import mongoose from "mongoose"
const app = express()
const mongouri =
  "mongodb+srv://guy33liba:1234@e-commerce.c38zveu.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce"
mongoose.connect(mongouri, console.log("connected mongo"))
app.use(cors())
app.use(express.json())
app.use("/products", productRouter)
const PORT = 4000
seedDatabase()
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
