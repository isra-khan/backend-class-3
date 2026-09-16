let username="isra",password="isra1234";

usernameInput=prompt("Enter your username");
passwordInput=prompt("Enter your password");


if(usernameInput===username && passwordInput===password){
    console.log("Login successful");
    alert("login successful");
}
else{
    console.log("Invalid username or password");
    alert("Invalid username or password");
}