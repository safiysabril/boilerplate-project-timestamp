const { Router } = require('express');
const { getDate } = require('../controllers/date.controllers');

const router = Router();

router.route('/:date').get(getDate);

module.exports = router;