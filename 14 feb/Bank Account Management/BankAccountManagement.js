function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited ${amount} into Account Number ${this.accountNumber} Balance : ${this.balance}`);
  } else {
    console.log('Invalid amount');
  }
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrawal ${amount} from Account number ${this.accountNumber}  Balance : ${this.balance}`);
  } else {
    console.log('Insufficient funds or invalid withdrawal amount.');
  }
};

BankAccount.prototype.checkBalance = function() {
  console.log(`Account ${this.accountNumber} Balance : ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
  return this.balance > 0;
};

let account1 = new BankAccount(1, "pushkar", 'current', 500);

account1.deposit(100);
account1.deposit(400);
account1.withdraw(500);
account1.isActive();
account1.checkBalance();
account1.deposit(15000);
account1.checkBalance();

let account2 = new BankAccount(2, "pushkar", 'current', 500);

account2.deposit(100);
account2.deposit(400);
account2.withdraw(500);
account2.isActive();
account2.checkBalance();
account2.deposit(15000);
account2.checkBalance();

let accounts = [account1, account2];

function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (let account of accounts) {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  }
  return totalBalance;
}

let allAccountBal = getTotalBalance(accounts);

console.log(`All Account Balance ${allAccountBal}`);
