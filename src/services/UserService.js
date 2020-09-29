import axios from "axios";

class UserService {
  constructor(
    baseURL = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.baseURL = baseURL;
    this.client = client;
  }

  getRecentUsers() {
    return this.client.get(this.baseURL + "/users").then((response) => {
      return response.data.users;
    });
  }
}

export default UserService;
