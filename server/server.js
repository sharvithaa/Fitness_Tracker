const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const userRoute=require('./Routes/userRoute')

//to execute express
const app=express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user",userRoute);

const port=5000;
app.listen(port,()=>console.log(`server is running in ${port}`));

const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));


