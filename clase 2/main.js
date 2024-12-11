
let usuarios = [];

let usuario = {
    email: "",
    password: ""
};


function crearCuenta() {
    console.log("¡Bienvenido al menu del Bar! Crea tu cuenta.");
    usuario.email = prompt("Ingresa tu email:");
    usuario.password = prompt("Crea una contraseña:");
    console.log("Cuenta creada con éxito.");
}


function iniciarSesion() {
    console.log("Inicia sesión.");
    let email = prompt("Ingresa tu email:");
    let password = prompt("Ingresa tu contraseña:");

    if (email === usuario.email && password === usuario.password) {
       alert("Inicio de sesión exitoso")
        return true; 
    } else {
        alert("Email y/o contraseña incorrectos, intenta nuevamente")
        return false; 
    }
}


function realizarPedido() {
    alert("Este es el menú del Bar :\n1. Cerveza - $5000\n2. Fernet con coca - $20000\n3. Pizza - $14000");

    let total = 0;
    let continuar = true; 

    while (continuar) {
        let opcion = parseInt(prompt("Elige un producto:\n1. Cerveza ($5000)\n2. Fernet con coca ($20000)\n3. Pizza ($14000)"));

        switch (opcion) {
            case 1:
                total += 5000;
                alert("Agregaste una Cerveza al pedido.");
                break;
            case 2:
                total += 20000;
                alert("Agregaste un Fernet al pedido.");
                break;
            case 3:
                total += 14000;
                alert("Agregaste una Pizza al pedido.");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción correcta.");
        }

        let respuesta = prompt("¿Quieres agregar otro producto? (si/no)").toLowerCase();

        if (respuesta !== "si") {
            continuar = false; 
        }
    }

    alert(`Tu pedido total es: $${total}\n¡Gracias por tu compra en Bar Marti!`);
}


function main() {
    let opcion = prompt("Bienvenido al menu de Bar. ¿Qué deseas hacer?\n1. Crear cuenta\n2. Iniciar sesión");

    if (opcion === "1") {
        crearCuenta();
    }

    let sesionIniciada = false;

    while (!sesionIniciada) {
        sesionIniciada = iniciarSesion();
        if (!sesionIniciada) {
            console.log("Intenta nuevamente.");
        }
    }

    realizarPedido();

}


main();

