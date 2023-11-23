function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = {
        "users": [
            {
                "email": "jp@gmail.com",
                "password": "123"
            },
            {
                "email": "usuario2@gmail.com.com",
                "password": "user2"
            },
            {
                "email": "usuario3@gmail.com",
                "password": "user3"
            }
        ]
    };

    var user = users.users.find(function (u) {
        return u.email === email && u.password === password;
    });

    if (user) {
        alert('Inicio de sesión exitoso');
        // Redirige a index.html si el inicio de sesión es exitoso
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas');
    }
}