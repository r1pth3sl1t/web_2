import ProfileView from "./view/ProfileView.js";

let profile = document.getElementById('profile-container');
profile.innerHTML = new ProfileView(JSON.parse(localStorage.getItem('authenticated')) ?? null).toHtml();
