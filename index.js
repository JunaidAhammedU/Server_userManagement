const express= require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./Routes/user');
const adminRouter = require('./Routes/admin');
const dbConnect = require("./Config/dbConnection");

require("dotenv").config()
const app=express()
   
app.listen(3001,()=>{
    console.log("connected 3001");
})
 
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: [process.env.origin],
    methods: ["GET", "POST"],
    credentials: true
}))

dbConnect();

app.use('/',userRouter);
app.use('/admin',adminRouter);