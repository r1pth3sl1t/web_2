export default class MessageView {
  constructor(message) {
    this.message = message;
  }

  toHtml () {
    let comments = '';

    this.message.comments.forEach((comment) => {
      let displayCommentDelete = '';
      if (JSON.parse(localStorage.getItem('authenticated')).name !== comment.creatorName)
        displayCommentDelete = 'd-none';
      comments += `
      <div class="d-flex">
      <div class="container px-5">
        <div class="d-flex justify-content-between">
          <h4 >${comment.creatorName}</h4>
          <span >${comment.date.toLocaleString()}</span>
        </div>
        <div class="d-flex justify-content-between">
            <p>${comment.text}</p>
        </div>
      </div>
      <button class="${displayCommentDelete} btn btn-danger fa fa-trash fa-danger" id="delete-comment${comment.id}"></button>
      </div>`;
    });

    let display = '';
    if (JSON.parse(localStorage.getItem('authenticated')).name !== this.message.creatorName)
      display = 'd-none';
    return `
    <div class="container my-5">
      <div class="d-flex justify-content-between">
        <span ><h3>${this.message.creatorName}</h3></span>
        <span >${this.message.date.toLocaleString()}</span>
      </div>
      <h2>${this.message.title}</h2>
      <p>${this.message.text}</p>
      <div class="d-flex justify-content-between" id="2" >
        <button class="${display} btn btn-danger text-white" id="delete${this.message.id}">Delete</button>
        <button class="btn btn-dark text-white" onclick="toggle('${this.message.id}')">Comments</button>
      </div>

      <div id="comments${this.message.id}" style="display: none;">
        <h4>Comments</h4>

        ${comments}

        <form class="d-flex" id="new-comment${this.message.id}">
          <label class="sr-only" for="comment${this.message.id}">Userame</label>
          <input type="text" id="comment${this.message.id}" class="form-control mx-2" placeholder="Add a comment"><br>
          <div class="svg-container">
          <button class="btn btn-light">
            <i class="fa fa-solid fa-check"></i>
          </button>
          </div>
        </form>
      </div>
    </div>
    `;
  }
}
