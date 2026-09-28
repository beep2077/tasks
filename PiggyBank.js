class PiggyBank {
    #balance = 0;
    
    put(x) {
        if (x <= 0) {
            console.log("Некорректная сумма")
        }
        this.#balance += x;
    }
    take(x) {
        if (x > this.#balance) {
            console.log('Недостаточно средств')
        }
        this.#balance -= x;
    }
    getBalance() {
        return this.#balance;
    }
}
let bank = new PiggyBank
bank.put(100)
bank.put(50)
bank.put(30)
console.log(bank.getBalance())