import User from "./entity/user.js";

export default class MessageModel {
  constructor(messageDAO) {
    this.messageDAO = messageDAO;
  }

  findAll() {
    return this.messageDAO.findAll();
  }

  add(message) {
    this.messageDAO.add(message);
  }

  delete(messageId) {
    this.messageDAO.delete(messageId);
  }

  addComment(messageId, comment) {
    this.messageDAO.addComment(messageId, comment);
  }

  deleteComment(commentId) {
    this.messageDAO.deleteComment(commentId);
  }
}


