const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {port, mongoURI} = require('./config')
const workRoutes = require('./routes/work')
const educationRoutes = require('./routes/education')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {})
.then(() => console.log("MongoDB database is connected"))
.catch((err) => console.log(err))

app.use('/api/work', workRoutes)
app.use('/api/education', educationRoutes)

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log('Express is running at port ' + port))