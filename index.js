import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './client/db.js';
import authRouter from './routes/authRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import userRouter from './routes/usersRouter.js';

const PORT = process.env.PORT || 7000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.use('/api', userRouter, recipesRouter, authRouter)

connectDB()

// const db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})