import MessageController from "./controller/MessageController.js";
import MessageModel from "./model/MessageModel.js";
import MessageDAO from "./dao/MessageDAO.js";

let controller = new MessageController(
  new MessageModel(new MessageDAO()));

if (!localStorage.getItem('messages'))
  localStorage.setItem('messages', '[]');


document.getElementById('new-message-form').addEventListener('submit',
    event => {
  event.preventDefault();
  controller.addMessage()});


controller.indexMessages();


