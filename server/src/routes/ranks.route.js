const express = require('express')
const router = express.Router()
const {
    getAllRanks,
    getRank,
    validateUpdateRequestBody,
    postUpdate,
} = require('../controllers/ranking');

router.get('/ranks', getAllRanks);
router.get('/ranks/:hash', getRank);
router.post('/ranks', validateUpdateRequestBody, postUpdate);

module.exports = router;