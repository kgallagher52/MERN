import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

dotenv.config();

const app = express(); // Initialize application
const CONNECTION_URL = process.env.MONGO_DB_CONNECTION;
const PORT = process.env.PORT;

app.use('/posts', postRoutes); // Every route that has /posts will go to the posts.js

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true })); // urlencoded is middleware function that parses incoming requests 
app.use(cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((err) => {
    console.log(err.message)
});

mongoose.set('useFindAndModify', false); // Make sure we don't get any warnings in the console





