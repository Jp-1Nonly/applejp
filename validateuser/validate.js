document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validarCredenciales();
    });
});

function validarCredenciales() {
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    fetch("users.json")
        .then(response => response.json())
        .then(data => {
            var usuarioValido = data.find(usuario => usuario.email === email && usuario.contraseña === password);
            if (usuarioValido) {
                alert("Inicio de sesión exitoso");
                window.location.href = "index.html";
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
}

function validarFormulario() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return false; 
    }


    return true; 
}