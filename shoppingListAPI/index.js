const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors');

var corsOptions = {
    origin: process.env.FRONT_URI,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
    credentials: true,
    origin: true
}

//load config
dotenv.config({path:'./config/config.env'})

//connect to db
connectDB();

const app = express()

//cors
app.use(cors(corsOptions));

//body parser
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

//logging
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}

//Routes
app.use('/',require('./routes/index'))
app.use('/user',require('./routes/user'))

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`Server running on port ${PORT}`))

