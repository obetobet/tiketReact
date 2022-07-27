import axios from "axios";
import jwt_decode from "jwt-decode";
const API_URL = "https://obet.pythonanywhere.com/v1/auth/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data.access) {
          var token = response.data.access;
          var decoded = jwt_decode(token);
          localStorage.setItem("user", JSON.stringify(decoded));
          localStorage.setItem("token", JSON.stringify(response.data.access));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("toket");
  }

  register(username: string, email: string, password: string, password2 : string,first_name : string,last_name  : string) {
    return axios.post(API_URL + "register/", {
      username,
      email,
      password,
      password2,
      first_name,
      last_name 

    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }

  gettoketUser() {
    const userStr = localStorage.getItem("toket");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();