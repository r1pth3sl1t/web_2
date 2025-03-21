import AccountsModel from "../model/AccountsModel.js";
import User from "../model/entity/user.js";

export default class AuthenticationController {
  constructor(model) {
    this.accountsModel = model;
  }

  login() {
    let form = document.getElementById('login-form');
    let username = form.elements['username'].value;
    let password = form.elements['password'].value;

    let account = this.accountsModel.findAccount(username, password);
    if (account) {
      this.accountsModel.login(account);
      alert('Login successful');
      return;
    }
    alert('Login unsuccessful');
  }

  signUp() {
    let form = document.getElementById('signup-form');
    let username = form.elements['username'].value;
    let email = form.elements['email'].value;
    let gender = form.elements['gender'].value;
    let birthDate = form.elements['birth-date'].value;
    let password = form.elements['password'].value;
    if (password !== form.elements['password-repeat'].value) {
      alert('Passwords don\'t match');
      return;
    }
    this.accountsModel.signUp(new User(username, email,password, birthDate,gender));
    alert('Successfully signed up');
  }
}
