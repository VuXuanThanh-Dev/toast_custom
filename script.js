
let arrToast = [];

const deleteBtn = document.querySelector(".delete");
const success = document.querySelector(".btn-success");
const warning = document.querySelector(".btn-warning");
const error = document.querySelector(".btn-error");
const body = document.querySelector("body");
let container = document.createElement('div');
    container.classList.add('container');


success.addEventListener("click", successToast);
warning.addEventListener("click", warningToast);
error.addEventListener("click", errorToast);
deleteBtn.addEventListener("click", deleteToast);


function successToast() {
  createToast('success', 'Thành công!', 'đăng nhập thành công!', 3000);
}

function warningToast() {
    createToast('warning', 'Cảnh báo', 'Chắc muốn xóa không?', 3000);
}

function errorToast() {
    createToast('error', 'Lỗi', 'đăng nhập không thành công!', 3000);
}

function deleteToast(idx) {
    arrToast[idx].remove();
}


function createToast(type, header, content, timelife) {

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(type);
    arrToast.push(toast);
    toast.innerHTML = `
    <div class="body">
    <p class="header">${header}!</p>
    <p class="content">${content}</p>
    </div>
    <div class="delete" onclick="deleteToast(${arrToast.length-1})">X</div>`;
    container.appendChild(toast);
    body.appendChild(container);
    setTimeout(() => {
        arrToast = arrToast.filter(toast => toast != toast);
        toast.remove();
    }, timelife);
}
