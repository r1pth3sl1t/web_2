export default class Message {
  constructor(creatorName, date, title, text) {
    this.id = localStorage.getItem('messageSerial');
    localStorage.setItem('messageSerial', '' + (+this.id + 1));
    this.creatorName = creatorName;
    this.date = date;
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}
