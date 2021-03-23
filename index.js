import app from './startup/app.js'
import http from 'http'
import connectDB from './startup/db.js'

//init server
const server = http.createServer(app);
const port = process.env.PORT || 5000

//starting server
server.listen((port), () => {
  console.log(`Server started on the port: ${port}`)
})

//init DB
connectDB();
