import User from "../model/entity/user.js";

export default class AccountsDAO {
  constructor() {
  }

  signUp(user) {
    let accounts = JSON.parse(localStorage.getItem('accounts')) ?? [];
    accounts.push(user);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }

  findAll() {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts.forEach((account) => account.birthDate = new Date(account.birthDate));
    return accounts;
  }

  getAuthenticated() {
    let account = JSON.parse(localStorage.getItem('authenticated'));
    account.birthDate = new Date(account.birthDate);
    return account;
  }

  login(account) {
    localStorage.setItem("authenticated", JSON.stringify(account));
  }
}
