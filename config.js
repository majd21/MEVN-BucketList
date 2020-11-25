const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

function setDevEnv(app) {
    process.env.DB_URL = 'mongodb://127.0.0.1:27017/bucket-db'
    app.use(cors())
    app.use(morgan('tiny'))
    app.use(express.json())
}

function connectToDB() {
    mongoose.connect(process.env.DB_URL , 
        {useNewUrlParser:true ,
        useCreateIndex:true ,
        useUnifiedTopology: true ,
    useFindAndModify: false}
        ).then(() => console.log('MongoDB database connected...'))
        .catch((err) => console.log(err))
}

module.exports = {
    setDevEnv ,
    connectToDB
}