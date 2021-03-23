import createError from 'http-errors'

const notFound = (req, res, next) => {
  next(createError(404, 'URL not found.'))
}

const errorFound = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null
  })
}

export { notFound, errorFound}
