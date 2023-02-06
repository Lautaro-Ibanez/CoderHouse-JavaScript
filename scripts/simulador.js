// --------------------------------------------- REGISTRO --------------------------------------------- //






var array_usuarios = [];

$(".btn-reg").click(function(){
    var usuarios = localStorage.getItem("usuarios");
    usuarios = JSON.parse(usuarios);
    console.log(usuarios);
    if (usuarios === null) {
        object_usuario = {nombre: $("#usuario-reg").val(), contraseña: $("#password-reg").val()}
        array_usuarios.push(object_usuario);
        let array_json = JSON.stringify(array_usuarios);
        localStorage.setItem("usuarios",array_json);
        $("#usuario-reg").val("")
        $("#password-reg").val("")
        alert("Se registro correctamente \n\n\n A continuacion inicie sesion")
        location.href = "./Pages/inicio.html"
    }
    else {
        array_usuarios = usuarios;
        object_usuario = {nombre: $("#usuario-reg").val(), contraseña: $("#password-reg").val()}
        array_usuarios.push(object_usuario);
        let array_json = JSON.stringify(array_usuarios);
        localStorage.setItem("usuarios",array_json);
        $("#usuario-reg").val("")
        $("#password-reg").val("")
        alert("Se registro correctamente \n\n\n A continuacion inicie sesion")
        location.href = "./Pages/inicio.html"
    }
})








// --------------------------------------------- INICIO --------------------------------------------- //

$(".datos-inc").hide();
var nombre_ingreso = ""
$(".btn-login").click(function(){
let get_local = localStorage.getItem("usuarios");
get_local = JSON.parse(get_local);
let usuario_logIn = $("#usuario-login").val();
let password_logIn = $("#password-login").val();
for (const usuario of get_local) {
    if (usuario_logIn === usuario.nombre && password_logIn === usuario.contraseña){

        nombre_ingreso = usuario.nombre;
        localStorage.setItem("nombre-ingreso",nombre_ingreso);

        alert(`Bienvenido/a ${usuario.nombre}`);
        location.href = "../Pages/simulador.html"
    }
    else {
        $(".datos-inc").show();
        $("#usuario-login").val("")
        $("#password-login").val("")
    }
}

})







// --------------------------------------------- SIMULADOR --------------------------------------------- //
let saldo = 0;
let name = localStorage.getItem("nombre-ingreso")
$(".dinero-en-cuenta").append(`<h1>Hola ${name}, bienvenido/a al simulador de cajero automatico </h1>`);
$(".dinero-en-cuenta").append(`<h2>Su dinero en cuenta es $${saldo}</h2>`);
console.log(nombre_ingreso)

$(".btn-dep").click(function(){
    let depositar = $(".input-dep").val();
    if(depositar<=0){
        alert("Por favor, introduzca un numero mayor a 0 para depositar")
        $(".input-dep").val("");
    }
    else {
        alert(`${name}, deposito correctamente $${depositar}`)
        saldo = saldo + parseInt(depositar);
        $("h2").text(`Su dinero en cuenta es $${saldo}`)
        $(".input-dep").val("");
    }

})


$(".btn-ext").click(function(){
    let extraer = $(".input-ext").val();
    if(extraer<=0 ){
        alert("Por favor, introduzca un numero mayor a 0 para extraer")
        $(".input-ext").val("")
    }
    else if ((saldo-parseInt(extraer)<0)) {
        alert("Usted no posee dinero para realizar esta extraccion")
        $(".input-ext").val("")
    }
    

    else {
        alert(`${name}, extrajo correctamente $${extraer}`)
        saldo = saldo - parseInt(extraer);
        $("h2").text(`Su dinero en cuenta es $${saldo}`)
        $(".input-ext").val("")
    }

})

