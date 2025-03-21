import ProfileView from "./view/ProfileView.js";
import AccountsDAO from "./dao/AccountsDAO.js";

let profile = document.getElementById('profile-container');
profile.innerHTML = new ProfileView(new AccountsDAO().getAuthenticated()).toHtml();
