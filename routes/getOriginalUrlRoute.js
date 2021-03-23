import { getOriginalUrl } from '../controllers/getOriginalUrlController.js'
import express from 'express'

const router = express.Router();

// @route     GET /
// @desc      Redirecting to Original URL from Shortned URL
// @access    public
router.route('/').get(getOriginalUrl)

export default router
