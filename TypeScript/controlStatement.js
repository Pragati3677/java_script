var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        }
        else {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    };
    BankAccount.prototype.displayBalance = function () {
        console.log("Account Holder:", this.accountHolder);
        console.log("Current Balance:", this.balance);
    };
    return BankAccount;
}());
var account1 = new BankAccount("Pragati", 5000);
for (var i = 1; i <= 1; i++) {
    account1.deposit(2000);
    account1.withdraw(3000);
    account1.displayBalance();
}
