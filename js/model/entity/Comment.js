export default class Comment {
  constructor(creatorName, date, text) {
    this.id = +localStorage.getItem('commentSerial');
    localStorage.setItem('commentSerial', '' + (this.id + 1));
    this.creatorName = creatorName;
    this.date = date;
    this.text = text;
  }
}
