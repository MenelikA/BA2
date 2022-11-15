const BankAccountCRUD = require('./BankAccountCRUD');
const IPersistence = require('./IPersistence');
const Transaction = require('../classes/Transaction');

const bankAccountCRUD = new BankAccountCRUD();

module.exports = class TransactionCRUD extends IPersistence {
    constructor() {
        super();
    }

    // handles creation of transactions
    create(element) {
        // get the accounts
        const from = bankAccountCRUD.read().find(account => account.id === element.from);
        const to = bankAccountCRUD.read().find(account => account.id === element.to);
        
        if (from === undefined || to === undefined) {
            return;
        }

        // take the money from the from account
        from.withdraw(element.amount);

        // put the money in the to account
        to.deposit(element.amount);
        

        // create the transaction
        from.transactions.push(new Transaction(element.amount, element.from, element.to));
        to.transactions.push(new Transaction(element.amount, element.from, element.to));

        // update the accounts
        bankAccountCRUD.update(from);
        bankAccountCRUD.update(to);
    }
    // just reads the transactions for all users
    read() {
        // get the accounts
        return bankAccountCRUD.read().map(acct => acct.transactions);
    }
    // handles updating of transactions
    update(element) {
        // get all the transactions
        transactions = transactCRUD.read();

        // find the transaction and update it
        transactions.forEach(userTransactionLog => {
            userTransactionLog.forEach(transaction => {
                if (transaction.id == element.id) {
                    transaction = element;
                }
            });
        });
    }
    // handles deletion of transactions
    delete(element) {
        // get all the transactions
        transactions = transactCRUD.read();
        // keep all the transactions that don't match the id
        transactions.forEach(userTransactionLog => {
            userTransactionLog = userTransactionLog.filter(transaction => transaction.id != element);
        });
    }
}