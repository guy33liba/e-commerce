import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const port = 5000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
