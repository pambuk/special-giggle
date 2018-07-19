const express = require('express');
const router = express.Router({});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
    req.db.collection('test').find().next((error, item) => {
        console.log(item);
    });
});

module.exports = router;
