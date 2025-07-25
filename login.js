function logear() {
    console.log("hice click")

    const email = document.getElementById("email").value;
    console.log("capturando email: ", email)

    const password = document.getElementById("password").value;
    console.log("capturando contraseñas: ", password)

    if (email == "karen@gmail.com" && password == "1234") {
        const mensajeOk = document.getElementById("mensaje-ok");
        mensajeOk.style.display = "flex";
    } else {
        const mensajeError = document.getElementById("error");
        mensajeError.style.display = "flex";
    }
}



