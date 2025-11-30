
function validarLogin(event) {
    event.preventDefault();
    const CLAVE_SECRETA = "perrito3";
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === CLAVE_SECRETA) { 
        alert("¡Acceso concedido! Bienvenido.");
        localStorage.setItem('isLoggedIn', 'true'); 
        window.location.href = "index.html";

    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
        document.getElementById("password").value = "";
    }

    return false;
}
