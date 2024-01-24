const shortid = require('shortid')
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body
    if (!body.url) {
        return res.status(400).json({ error: 'Url is required!' })
    }


    const shortID = shortid.generate();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistry: []
    })

    return res.json({ id: shortID })
}

async function handleVisitShortURL(req, res) {
    const shortID = req.params.shortId
    const data = await URL.findOneAndUpdate(
        {
            shortId: shortID
        },
        {$push:{
            visitHistry:{timeStamp: Date.now()}
        },
    }
    )
    res.redirect(data.redirectURL)
}

module.exports = {
    handleGenerateNewShortURL,
    handleVisitShortURL
}