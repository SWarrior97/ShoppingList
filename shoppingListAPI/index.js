const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors');

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//load config
require('dotenv').config()

//cors options
var corsOptions = {
    origin: process.env.FRONT_URI,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
}

//swagger options
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "API",
        description: "API Information",
      }
    },
    // ['.routes/*.js']
    apis:['./routes/*.js']
  };

//connect to db
connectDB();

const app = express()
app.disable("x-powered-by")

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
app.use('/shoppingList',require('./routes/list'))

//swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`Server running on port ${PORT}`))

