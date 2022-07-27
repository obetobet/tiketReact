export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
      user = JSON.parse(userStr);
  
    if (user && user.access) {
      return { Authorization: 'token ' + user.access }; 
    } else {
      return { Authorization: '' }; 
    }
  }