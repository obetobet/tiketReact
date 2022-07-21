import axios from "axios";

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
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
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
}

export default new AuthService();