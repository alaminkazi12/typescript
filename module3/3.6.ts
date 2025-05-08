{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount) {
      this._balance = this._balance + amount;
    }

    // getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 50);

  //   goribManusherAccount.addDeposit(400);

  //   const myBalance = goribManusherAccount.getBalance();

  goribManusherAccount.deposit = 50;

  const myBalance = goribManusherAccount.balance;

  console.log(myBalance);

  //
}
