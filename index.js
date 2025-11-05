function logUser(email, password) {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(`User: ${email} password: ${password}`);
}