const express = require('express');
const { createTicket } = require('../controller/ticket');

const router = express.Router();

router.post('/ticket', createTicket);

module.exports = router;
