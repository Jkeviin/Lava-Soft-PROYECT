function sendData(evt) {
  let name = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let passwordVer = document.getElementById("passwordVer").value;
  let numberId = document.getElementById("numberId").value;
    if (password == passwordVer) {
        evt.preventDefault();
        console.log(name);
        console.log(password);
        console.log(numberId);
    } else {
        alert("Las contraseñas deben coincidir");
    }
}
//no sirve nada
