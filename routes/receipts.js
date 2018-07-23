const express = require('express');
const router = express.Router({});
const assert = require('assert');
const moment = require('moment');
const mongodb = require('mongodb');

router.get('/', (req, res) => {
    req.db.collection('receipts').find().toArray((error, items) => {
        assert.equal(error, null);

        items.forEach((item, key) => {
            items[key].amount = item.amount / 100;
        });

        res.send(items);
    });
});

router.post('/', (req, res, next) => {
    req.db.collection('receipts').insert({
        amount: parseFloat(req.body.amount.replace(/,/g, '.')) * 100,
        date: moment().toDate()
    });

    res.send();
});

router.delete('/:id', (req, res, next) => {
    req.db.collection('receipts').deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.send();
});

module.exports = router;
