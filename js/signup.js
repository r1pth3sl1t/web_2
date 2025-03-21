import AuthenticationController from "./controller/AuthenticationController.js";
import AccountsModel from "./model/AccountsModel.js";
import AccountsDAO from "./dao/AccountsDAO.js";

let authController = new AuthenticationController(
  new AccountsModel(new AccountsDAO()));

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  authController.signUp();
});
