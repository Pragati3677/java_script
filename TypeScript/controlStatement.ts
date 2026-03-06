class BankAccount {

    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
	
    deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }

    withdraw(amount: number): void {

        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        } else {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    }

    displayBalance(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Current Balance:", this.balance);
    }
}

let account1 = new BankAccount("Pragati", 5000);

for (let i = 1; i <= 1; i++) {

    account1.deposit(2000);
    account1.withdraw(3000);
    account1.displayBalance();
}