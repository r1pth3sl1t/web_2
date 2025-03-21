import MessageModel from "../model/MessageModel.js";
import Message from "../model/entity/Message.js";
import Comment from "../model/entity/Comment.js";
import MessageView from "../view/MessageView.js";
import AccountsDAO from "../dao/AccountsDAO.js";

export default class MessageController {
  constructor(messageModel) {
    this.messageModel = messageModel;
    this.accountsDAO = new AccountsDAO();
  }

  addMessage() {
    if (!this.accountsDAO.getAuthenticated()) {
      alert('Unauthorized');
      return;
    }

    let account = this.accountsDAO.getAuthenticated();
    let title = document.getElementById("new-message-form").elements['title'].value;
    let text = document.getElementById("new-message-form").elements['new-message'].value;
    let message = new Message(account.name, new Date(Date.now()), title, text);
    this.messageModel.add(message);

    this.indexMessages();
  }

  addComment(messageId) {
    if (!this.accountsDAO.getAuthenticated()) {
      alert('Unauthorized');
      return;
    }

    let account = this.accountsDAO.getAuthenticated();
    let text = document.getElementById("new-comment" + messageId).elements['comment' + messageId].value;
    let comment = new Comment(account.name, new Date(Date.now()), text);
    this.messageModel.addComment(messageId, comment);

    this.indexMessages();
    toggle(messageId);
  }

  indexMessages() {
    let html = '';
    let messages = this.messageModel.findAll();

    messages.forEach((message) => {
      html += new MessageView(message).toHtml();
    })
    document.getElementById('messages').innerHTML = html;
    messages.forEach(message => {
      message.comments.forEach(comment => {
        document.getElementById('delete-comment' + comment.id).addEventListener('click', () => this.deleteComment(comment.id));
      })
      document.getElementById('delete' + message.id).addEventListener('click', () => this.deleteMessage(message.id));
      document.getElementById('new-comment' + message.id).addEventListener('submit', (event) => {
        event.preventDefault();
        this.addComment(message.id)
      });
    })
  }

  deleteMessage(id) {
    this.messageModel.delete(id);
    this.indexMessages();
  }

  deleteComment(id) {
    this.messageModel.deleteComment(id);
    this.indexMessages();
  }
}
