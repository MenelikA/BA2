const uuid = require('uuid');

module.exports = class IBankAccount {
  
  #balance = 0;
  #maxWithdrawal = 0;

  constructor(title, balance, maxWithdrawal, transactions, id) {
    if (this.constructor === IBankAccount) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.id = id ?? uuid.v4();
    this.title = title;
    this.transactions = transactions;
    
    this.#balance = balance;
    this.#maxWithdrawal = maxWithdrawal;
  }
  deposit(amount) {}
  withdraw(amount) {}
  send(amount, to) {}
  receive(amount, from) {}
  getBalance() {}
}