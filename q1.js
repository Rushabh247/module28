class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited ${amount} into the account.`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from the account.`);
    }

    checkBalance() {
        console.log(`Account balance: ${this.balance}`);
    }
}


const account = new BankAccount(1000);
account.checkBalance(); // Output: Account balance: 1000
account.deposit(500);   // Output: Deposited 500 into the account.
account.checkBalance(); // Output: Account balance: 1500
account.withdraw(200);  // Output: Withdrawn 200 from the account.
account.checkBalance(); // Output: Account balance: 1300
account.withdraw(2000); // Output: Insufficient funds.
account.deposit(-100);  // Output: Deposit amount must be positive.
