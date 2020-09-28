import axios from "axios";
import { store } from "../redux";

class MessageService {
    constructor(
        baseURL = "https://socialapp-api.herokuapp.com",
        client = axios.create()
    ) {
        this.baseURL = baseURL
        this.client = client
    }

    getUsername () {
        const loginData = JSON.parse(localStorage.getItem("login"))
        const { username } = loginData.result
        return username
    }

    getToken () {
        const { token } = store.getState().auth.login.result
        return token
    }

    getRecentMessages() {
        return this.client
            .get(this.baseURL + "/messages")
            .then(response => {
                return response.data.messages
            })
    }

    postLike(messageId) {
        const requestBody = { messageId }
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}` 
            }
        }
        return this.client
            .post(this.baseURL + "/likes", requestBody, config)
            .then(response => response.data.like)
    }
    
    deleteLike = id => {
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
            }
        }
        return this.client
            .delete(this.baseURL + `/likes/${id}`, config)
            .then(response => response.data)
    }

    uploadPicture (pictureAsFormData) {
        const endpoint = `${this.baseURL}/users/${this.getUsername()}/picture`
        const config = {
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
            }
        }
        return this.client.put(endpoint, pictureAsFormData, config)
    }
}

export default MessageService;