const express = require('express')
const { setDevEnv , connectToDB} = require('./config')
const bucketListItemRoutes = require('./routes/api/bucketListItems')

const app = express()

const PORT = process.env.PORT || 3000

setDevEnv(app)
connectToDB()

app.use('/api/bucketListItems', bucketListItemRoutes)
app.get('/' , (req , res) => {
    res.send('Hello World')
})


app.listen(PORT , () => {
    console.log('server is running on port ' + PORT);
})