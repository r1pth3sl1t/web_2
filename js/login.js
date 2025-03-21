import AuthenticationController from "./controller/AuthenticationController.js";
import AccountsModel from "./model/AccountsModel.js";
import AccountsDAO from "./dao/AccountsDAO.js";

let authController = new AuthenticationController(
  new AccountsModel(new AccountsDAO()));

document.getElementById('login-form').addEventListener('submit', (event) => authController.login());
