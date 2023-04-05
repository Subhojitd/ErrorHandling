const prompt = require("prompt-sync")();
class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      } else {
        this._password = newPassword;
        console.log("Password changed successfully.");
      }
    }
  }
  
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");
  
  const user = new User(username, password);
  console.log(user.password);
  
  const newPassword = prompt("Enter your new password:");
  user.password = newPassword;
  console.log(user.password);
  