import express from 'express'
import { urlShorten } from '../controllers/urlShortenController.js'

const router = express.Router();

// @route     POST /api/url/shorten
// @desc      Create short URL
router.route('/shorten').post(urlShorten)

export default router;
