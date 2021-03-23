import createError from 'http-errors'
import validUrl from 'valid-url'
import Url from '../models/urlModel.js'

const getOriginalUrl = async (req, res, next) => {
  try{
    const url = await Url.findOne({ urlCode: req.params.code})
    if(url){
      res.redirect(url.longUrl)
    }else{
      createError(404, 'No URL found.');
    }
  }catch(error){
    createError(500, error)
  }
}

export { getOriginalUrl }
