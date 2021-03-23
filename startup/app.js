import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorFound } from '../middlewares/errorHandler.js'
import urlShorten from '../routes/urlShortenRoute.js'
import getOriginalUrl from '../routes/getOriginalUrlRoute.js'

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

//route handler
app.use('/api/url', urlShorten)
app.use('/', getOriginalUrl)

export default app;
