let fullNameEl = document.getElementById("fullName");
let inputNameEl = document.getElementById("inputName");
let passWord = document.getElementById("pass");
let rePassWord  = document.getElementById("repass");
let btn = document.getElementById("btn-add")

const addForm = () => {
    let info = [];
    let add = {
        fullname:fullNameEl.value,
        usersname:inputNameEl.value,
        passWord:passWord.value,
    }
    if(fullNameEl.value.trim() === "" || !fullNameEl.value){
        alert("Họ và tên không được để trống");
        return;
    }
    if(inputNameEl.value.trim() === "" || !inputNameEl.value){
        alert("Tên đằng nhập không được để trống");
        return;
    }else if(inputNameEl.value.length < 4){
        alert("Tên đăng nhập phải có ít nhất 4 ký tự");
        return;
    }
    if(passWord.value ===""){
        alert("Mật khẩu không được để trống");
        return;
    }else if(passWord.value.length < 6){
        alert("Mật khẩu tối thiểu phải là 6 ký tự");
        return;
    }
    if(rePassWord.value !== passWord.value){
        alert("Mật khẩu nhập lại không khớp");
        return;
    }
    info.push(add);
    localStorage.setItem("users", JSON.stringify(info));
    fullNameEl.value = '';
    passWord.value = '';
    inputNameEl.value = '';
    rePassWord.value = '';
    alert("Đăng ký thành công");
}
btn.addEventListener("click" , addForm);