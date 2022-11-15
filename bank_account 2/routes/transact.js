const express = require('express');
const router = express.Router();
const BankAccountCRUD = require('../data/BankAccountCRUD');
const TransactionCRUD = require('../data/TransactionCRUD');

const bankAccountCRUD = new BankAccountCRUD();
const transactCRUD = new TransactionCRUD();

// read
router.get('/', (req, res)=> {
    // body format: not needed
    console.log(transactCRUD.read());
    res.json(transactCRUD.read());
});

// read by id
router.get('/:id', (req, res)=> {
    // body format: not needed
    transactions = transactCRUD.read();
    out = []
    transactions.forEach(userTransactionLog => {
        userTransactionLog.forEach(transaction => {
            if (transaction.id == req.params.id) {
                out.push(transaction);
            }
        });
    });
    res.json(out);
});

// create
router.post('/', (req, res)=> {
    // body format: {from, to, amount}
    transactCRUD.create(req.body);
    res.json(transactCRUD.read());
});

// update
router.put('/', (req, res)=> {
    // body format: {id, to, from, amount}
    transactCRUD.update(req.body);
    res.json(transactCRUD.read());
});

// delete
router.delete('/:id', (req, res)=> {
    // body format: not needed
    transactCRUD.delete(req.params.id); 
    res.json(transactCRUD.read());
});

module.exports = router;