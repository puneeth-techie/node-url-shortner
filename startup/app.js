import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorFound } from '../middlewares/errorHandler.js'

//dotenv config
dotenv.config()

//init app
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//errorHandler
app.use(notFound)
app.use(errorFound)

export default app;
