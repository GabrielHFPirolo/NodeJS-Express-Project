import express from 'express'
import 'dotenv/config'
import connectDb from "./src/database/mongo.js"

const app = express()
app.use(express.json())

connectDb()

app.listen (process.env.PORT, () => {
    console.log(200) 
}) 
