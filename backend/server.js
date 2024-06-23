import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
  res.send("hello g")
})
app.listen(4000, console.log("online"))
