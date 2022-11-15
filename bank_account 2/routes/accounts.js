const express = require('express');
const router = express.Router();
const BankAccountCRUD = require('../data/BankAccountCRUD');

const bankAccountCRUD = new BankAccountCRUD();

// read
router.get('/', (req, res)=> {
    res.send(bankAccountCRUD.read());
});

// read by id
router.get('/:id', (req, res)=> {
    // body format: not needed
    accounts = bankAccountCRUD.read();
    res.send(accounts.filter(account => account.id == req.params.id));
});

// create
router.post('/', (req, res)=> {
    // body format: {title, balance, type: checking/savings}
    bankAccountCRUD.create(req.body);
    res.send(bankAccountCRUD.read());
});

// update
router.put('/', (req, res)=> {
    // body format: {title, balance, maxWidthdrawal, transactions}
    bankAccountCRUD.update(req.body);
    res.send(bankAccountCRUD.read());
});

// delete
router.delete('/:id', (req, res)=> {
    // body format: not needed
    bankAccountCRUD.delete(req.params.id);
    res.send(bankAccountCRUD.read());
});

module.exports = router;