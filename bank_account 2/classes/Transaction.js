const uuid = require('uuid');

module.exports = class Transaction {
    constructor(amount, to, from) {
        this.id = uuid.v4();
        this.to = to;
        this.from = from;
        this.amount = amount;
    }
}