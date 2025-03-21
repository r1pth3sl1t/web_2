export default class ProfileView {
  constructor(user) {
    this.user = user;
  }

  toHtml() {
    console.log(this.user.birthDate);
    if (this.user)
      return `
        <div class="mx-auto">
          <div class="d-flex justify-content-center">
            <h1>Profile</h1>
          </div>
          <table class="table table-striped">
            <tr>
              <th>Name</th>
              <td>${this.user.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>${this.user.email}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>${this.user.gender}</td>
            </tr>
            <tr>
              <th>Birthdate</th>
              <td>${this.user.birthDate}</td>
            </tr>
          </table>
        </div>
      `;
    else return `
      <p>Unauthorized</p>
    `
  }
}
