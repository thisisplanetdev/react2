    const express = require('express');
    const { addvideo,listvideo, deletevideo } = require('../controllers/controller');

    const videoroute = express.Router();

    videoroute.get('/list',listvideo)
    videoroute.post('/add', addvideo);     
    videoroute.post('/delete/:number',deletevideo)
    module.exports = videoroute;
