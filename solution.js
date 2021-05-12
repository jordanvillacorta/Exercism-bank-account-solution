export class BankAccount {
    constructor() {
      this.WellsFargo = {balance: 0, accountStatus: false};
    }
  
    open() {
      this.WellsFargo.balance = 0;
      if (this.WellsFargo.accountStatus) {
        throw new ValueError();
      }
      this.WellsFargo.accountStatus = true;
    }
  
    close(accountOperating) {
      if (this.WellsFargo.accountStatus === false) {
        throw new ValueError();
      }
      this.WellsFargo.accountStatus = false;
    }
  
    deposit(depositAmount) {
      if (this.WellsFargo.accountStatus === false || depositAmount < 0) {
        throw new ValueError();
      }
      this.WellsFargo.balance += depositAmount;
    }
  
    withdraw(withdrawAmount) {
      if (this.WellsFargo.accountStatus === false || withdrawAmount > this.WellsFargo.balance || withdrawAmount < 0) {
        throw new ValueError();
      }
      this.WellsFargo.balance -= withdrawAmount;
    }
  
    get balance() {
      if (this.WellsFargo.accountStatus === false) {
        throw new ValueError();
      }
      return this.WellsFargo.balance;
    }
  }
  
  export class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }