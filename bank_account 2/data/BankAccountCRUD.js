const CheckingAccount = require('../classes/CheckingAccount');
const SavingsAccount = require('../classes/SavingsAccount');
const Transaction = require('../classes/Transaction');
const IPersistence = require('./IPersistence');

const BankAccounts = [
    new CheckingAccount("Sam", 100, 250, [new Transaction(20, '456', '123')], '123'),
    new CheckingAccount("Ali", 100, 250, [new Transaction(20, '123', '256')], '456'),
    new CheckingAccount("Joe", 100, 250, [], '789'),
    new CheckingAccount("Jess", 100, 250, []),
    new SavingsAccount("Sammy", 100, 250, []),
]

module.exports = class BankAccountCRUD extends IPersistence {
    constructor() {
        super();
    }
    // handles creation of accounts
    create(element) {
        // if the account is a checking account
        if (element.type === 'checking') {

            // create a new checking account
            BankAccounts.push(new CheckingAccount(element.title, element.balance, 250, []));
            return;
        }

        // if the account is a savings account
        BankAccounts.push(new SavingsAccount(element.title, element.balance, 250, []));
    }

    // read all the accounts
    read() {
        return BankAccounts;
    }

    // handles updating of accounts
    update(element) {

        // find the account
        let index = BankAccounts.findIndex(account => account.id === element.id);

        // if the account is not found
        if (index === -1) {
            return;
        }

        // update the account
        BankAccounts[index] = element;
    }

    // handles deletion of accounts
    delete(element) {

        // find the account
        let index = BankAccounts.findIndex(account => account.id === element);

        // if the account is not found
        if (index === -1) {
            return;
        }

        // delete the account
        BankAccounts.splice(index, 1);
    }
}