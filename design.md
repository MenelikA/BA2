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

## 4-Pillars of OOP in Action

### Encapsulation
An example of encapsulation can be found in the IBankAccount.js folder where we are creating data elements such as the "balance" which denotes account balance and "maxWithdrawal" which denotes the maximum withdrawal limit for a certain account. These variables are hidden from the public access and can only be modified through class member functions. This example exhibits encapsulation.

### Abstraction
This is being used at multiple places. One of the most common use-cases is in the IPersistence interface which abstracts away all the nitty gritty details about reading and writing objects. Instead, it provides clean functions that handle all the technical details at the back.

### Polymorphism
This is being exhibited especially in the case of CheckingAccount and SavingsAccount classes. Both of these classes have similar functions but are being pointed by an IBankAccount variable. Depending on the object itself, the corresponding function from that specific is called, i.e. if we call deposit(amount) function on the CheckingAccount object, it will not call the IBankAccount deposit(amount) function due to polymorphism and will instead resort to calling the function present in the CheckingAccount class.

### Inheritance
We use inheritance in two places, IBankAccount and IPersistence. These two classes define the overall blueprint and functionality for their corresponding children. For example, IBankAccount provides all the standard function prototypes that are generally present in account operations such as withdraw, deposit, etc. These prototypes are then inherited and implemented through their child classes CheckingAccount and SavingsAccount.





