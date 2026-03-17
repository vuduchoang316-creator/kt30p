let inputName = document.getElementById("contact-name");
let inputPhone = document.getElementById("contact-phone");
let inputEmail = document.getElementById("contact-email");
let btn_add = document.getElementById("btn-add");
let tBody = document.getElementById("contact-tbody");

const addPerson = (e) => {
    e.preventDefault();
    let nameEl = inputName.value;
    let phoneEl = inputPhone.value;
    let emailEl = inputEmail.value;

    if (nameEl.trim() === "" || !nameEl) {
        alert("Tên không được để trống");
        return;
    }else if(nameEl.length < 2){
        alert("Họ tên ít nhất phải tưef 2 kí tự");
    }

    if(phoneEl ===""){
        alert("Số điện thoại không được để trống");
        return;
    }
    if(emailEl.trim() ===""){
       alert("Email không được để trống");
       return;
    }

    let tr = document.createElement("tr");
    localStorage.setItem("count",5);
let count = localStorage.getItem("count");
let countS = +count + 1;
localStorage.setItem("count",countS);
    tr.innerHTML=`
         <td>${countS}</td>
         <td>${nameEl}</td>
         <td>${phoneEl}</td>
         <td>${emailEl}</td>
         <td>
         <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
            </div>
        </td>
         `
         tBody.appendChild(tr);
}
btn_add.addEventListener("click", addPerson);