import nanid from 'nanoid'
import validUrl from 'valid-url'
import createError from 'http-errors'
import Url from '../models/urlModel.js'

const urlShorten = async (req, res, next) => {
  const { longUrl } = req.body
  const baseUrl = process.env.BASE_URL

  //checking the base url
  if(!validUrl.isUri(baseUrl)){
    createError(401, 'Invalid base url.')
  }

  //create a short code
  const urlCode = nanoid(6);

  //checking long url and generating shorten url
  if(validUrl.isUri(longUrl)){
    try{
      //checking if url is exist
      let url = await Url.findOne({ longUrl })
      if(url){
        res.json(url);
      }else{
        //constructing the URL
        const shortUrl = baseUrl + '/' + urlCode
        url = await new Url({
          urlCode,
          longUrl,
          shortUrl,
          date: new Date()
        })

        //saving to the DB
        await url.save();
        res.json(url)
      }
    }catch(error){
      createError(500, error)
    }
  }else{
    createError(401, "Invalid URL.")
  }
}

export { urlShorten }
