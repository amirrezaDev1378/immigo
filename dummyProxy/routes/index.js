var express = require('express');
var router = express.Router();
const axios = require("axios")
/* GET home page. */
router.get('/', async function (req, res, next) {
    const mm = await axios.get("https://feeds.npr.org/1004/feed.json")
    res.send(mm.data)

});

module.exports = router;
