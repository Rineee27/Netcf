function sigup(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let email = document.getElementById('email').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let user = {
        username: username,
        password: password,
        email: email,
        confirmPassword: password

    }
    let json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công")
}