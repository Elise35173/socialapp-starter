import axios from "axios";
import { store } from "../redux";

class MessageService {
  constructor(
    baseURL = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.baseURL = baseURL;
    this.client = client;
  }

  getUsername() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    const { username } = loginData.result;
    return username;
  }

  getToken() {
    const { token } = store.getState().auth.login.result;
    return token;
  }

  getRecentMessages() {
    return this.client.get(this.baseURL + "/messages").then((response) => {
      return response.data.messages;
    });
  }

  postLike(messageId) {
    const requestBody = { messageId };
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client
      .post(this.baseURL + "/likes", requestBody, config)
      .then((response) => response.data.like);
  }

  uploadPicture(pictureAsFormData) {
    const endpoint = `${this.baseURL}/users/${this.getUsername()}/picture`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return this.client.put(endpoint, pictureAsFormData, config);
  }

  postMessage(message) {
    return this.client
      .post(this.baseURL + "/messages", message, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  deleteMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client
      .delete(this.baseURL + "/messages/" + messageId, {
        headers: { Authorization: `Bearer ${loginData.result.token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}

export default MessageService;
