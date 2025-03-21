export default class MessageDAO {
  constructor() {
  }

  findAll() {
    let messages = JSON.parse(localStorage.getItem('messages'));
    messages.reverse();
    messages.forEach((message) => {
      message.date = new Date(message.date);
      message.comments.forEach((comment) => {
        comment.date = new Date(comment.date);
      })
    });
    return messages;
  }

  delete(messageId) {
    let messages = JSON.parse(localStorage.getItem('messages'));
    messages = messages.filter(msg => {
      return messageId !== msg.id
    });
    localStorage.setItem('messages', JSON.stringify(messages) ?? '[]');
  }

  add(message) {
    let msg = JSON.parse(localStorage.getItem('messages'));
    msg.push(message);
    localStorage.setItem('messages',JSON.stringify(msg));
  }

  addComment(messageId, comment) {
    let messages = JSON.parse(localStorage.getItem('messages'));
    let msg = messages.find(msg => {
      return messageId === msg.id
    });

    msg.comments.push(comment);
    localStorage.setItem('messages', JSON.stringify(messages) ?? '[]');
  }

  deleteComment(commentId) {
    let messages = JSON.parse(localStorage.getItem('messages'));
    let msg = messages.find(msg => {
      return msg.comments.find(comment => {
        return comment.id === commentId
      });
    });
    console.log(msg);
    msg.comments = msg.comments.filter(comment => {
      return comment.id !== commentId;
    });
    localStorage.setItem('messages',JSON.stringify(messages));
  }

}
