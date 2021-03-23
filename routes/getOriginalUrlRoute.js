import { getOriginalUrl } from '../controllers/getOriginalUrlController.js'
import express from 'express'

const router = express.Router();

// @route     GET /:code
// @desc      Redirecting to Original URL from Shortned URL
// @access    public
router.route('/:code').get(getOriginalUrl)

export default router
