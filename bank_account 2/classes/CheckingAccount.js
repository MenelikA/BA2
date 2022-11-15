const IBankAccount = require("./IBankAccount");
const Transaction = require("./Transaction");

module.exports = class CheckingAccount extends IBankAccount {
    constructor(title, balance, maxWithdrawal, transactions, id) {
        super(title, balance, maxWithdrawal, transactions, id);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.maxWithdrawal) {
            return;
        }
        this.balance -= amount;
    }
    send(amount, to) {
        this.transactions.push(new Transaction(amount, to, this.id));
    }
    receive(amount, from) {
        this.transactions.push(new Transaction(amount, this.id, from));
    }
}