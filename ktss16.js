
const display = (event) => {
    event.preventDefault();
    let inputEmail = document.getElementById("email");
        let newEmail = inputEmail.value;
    let inputPassWord = document.getElementById("password");
    let newPassword = inputPassWord.value;
    let inputRePassword = document.getElementById("rePassWord");
    let newRepassword = inputRePassword.value;
    let user = {
        email: newEmail,
        password:newPassword,
        repassword : newRepassword
    };
    console.log(user);
    inputEmail.value = "";
    inputPassWord.value = "";
    inputRePassword.value = "";
}
let button = document.getElementById("add");
button.addEventListener("click" , display);
