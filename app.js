const express = require('express'); //function
require('dotenv').config()
const app = express(); //object -> instance application
const mongoose = require('mongoose'); //odm ->obj data mapper
const calculatorRoutes = require('./apis/solarCalculator')
const cors = require('cors');
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());//body parsing middleware

mongoose.connect(DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})


app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello from solar app"})
})

//seedDB();

app.use(calculatorRoutes);


app.listen(PORT , ()=>{
    console.log("server connected at port 8080")
})