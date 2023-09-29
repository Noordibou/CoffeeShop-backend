const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/coffeeShops')
const commentRoute = require('./routes/comments')
const app = express()

app.use(logger('dev'))
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser())
require('dotenv').config()
require('./config/database')


app.use(cors({
  origin: ['https://coffee-shop-blog2.vercel.app',
    'http://localhost:3000'],
  credentials: true,
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Authorization',
  ],
}));


// var allowlist = ['https://coffee-shop-blog.vercel.app',
//   'http://localhost:3000']

// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.use(cors(corsOptionsDelegate));


app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/coffeeshops", postRoute)
app.use("/comments", commentRoute)



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});