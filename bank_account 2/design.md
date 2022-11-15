# Bank Account Management Demo

## Classes
There are four classes within the system.

- IBankAccount
- CheckingAccount
- SavingsAccount
- Transaction

IBankAccount is an interface or a superclass that defines the common behavior of all bank accounts. CheckingAccount and SavingsAccount are subclasses of IBankAccount. Transaction is a class that represents a transaction between a bank account and a customer.

## Data
In the data folder, we define all the files pertaining to data retrieval and manipulation. In the BankAccountCRUD.js file, we have created the array that holds all of the required data for the operation. We have the following files in the data folder:

- BankAccountCRUD.js
- TransactionCRUD.js
- IPersistence.js

The IPeristence.js file is an interface that defines the common behavior of all data access objects. The BankAccountCRUD.js and TransactionCRUD.js files are the data access objects that implement the IPersistence interface.

## Routes
In the routes folder, we define all the files pertaining to the routing of the application. We have the following files in the routes folder:

- accounts.js
- transact.js

## Endpoints

- GET /accounts - Returns all bank accounts
- GET /accounts/:id - Returns a bank account with the specified id
- POST /accounts - Creates a new bank account
- PUT /accounts/:id - Updates a bank account with the specified id
- DELETE /accounts/:id - Deletes a bank account with the specified id


- GET /transact - Returns all transactions
- GET /transact/:id - Returns a transaction with the specified id
- POST /transact - Creates a new transaction
- PUT /transact/ - Updates a transaction with the specified id
- DELETE /transact/:id - Deletes a transaction with the specified id
