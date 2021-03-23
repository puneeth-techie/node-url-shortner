import mongoose from 'mongoose'
import createError from 'http-errors'

const connectDB = async () => {
  try{
    const url = process.env.DB_URL;
    const conn = await mongoose.connect((url), {
      useNewUrlParser : true,
      useUnifiedTopology : true,
      useCreateIndex : true
    })
    console.log(`Connected to the DB: ${conn.connection.host}`)
  }catch(error){
    createError(500, error)
    process.exit(1)
  }
}

export default connectDB;
