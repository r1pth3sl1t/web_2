export default class AccountsModel {
  constructor(accountsDAO) {
    this.currentAccount = null;
    this.accountsDAO = accountsDAO;
  }

  signUp(user) {
    this.accountsDAO.signUp(user);
  }

  findAccount(username, password) {
    return this.accountsDAO.findAll().find((user) => {
      return user.name === ('' + username) && user.password === ('' + password);
    });
  }

  login(user) {
    this.accountsDAO.login(user);
  }
}
