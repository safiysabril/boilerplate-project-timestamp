const { Router } = require('express');
const dateRouter = require('./date.routers');

const router = Router();

router.use('/', dateRouter)

module.exports = { router };