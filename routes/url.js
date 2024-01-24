const express = require('express')
const { handleGenerateNewShortURL, handleVisitShortURL } = require('../controllers/url')

const router = express.Router()

router.post('/', handleGenerateNewShortURL)
router.get('/:shortId', handleVisitShortURL)

module.exports= router