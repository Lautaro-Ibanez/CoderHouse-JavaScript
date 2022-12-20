class Usuario {
    constructor(nombre,edad,saldo){
        this.nombre = nombre;
        this.edad = edad;
        this.saldo = saldo;
    }

    retirar(saldo) {

        if (saldo >= 1000) {
        var billetes1000=0;
        while (saldo >= 1000){
            saldo= saldo - 1000;
            this.saldo = this.saldo - 1000
            billetes1000=billetes1000+1
        }
        if (billetes1000>1){
            console.log("Se extrajo, ",billetes1000,"billetes de $1000")
        }
        else {
            console.log("Se extrajo, ",billetes1000,"billete de $1000")
        }
    }
    
        if (saldo >= 500) {
            var billetes500=0;
            while (saldo >= 500){
                saldo= saldo - 500;
                this.saldo = this.saldo - 500
                billetes500=billetes500+1
            }
            if (billetes500>1){
                console.log("Se extrajo, ",billetes500,"billetes de $500")
            }
            else {
                console.log("Se extrajo, ",billetes500,"billete de $500")
            }
        }
    
        if (saldo >= 200) {
            var billetes200=0;
            while (saldo >= 200){
                saldo= saldo - 200;
                this.saldo = this.saldo - 200
                billetes200=billetes200+1
            }
            if (billetes200>1){
                console.log("Se extrajo, ",billetes200,"billetes de $200")
            }
            else {
                console.log("Se extrajo, ",billetes200,"billete de $200")
            }
        }
    
        if (saldo >= 100) {
            var billetes100=0;
            while (saldo >= 100){
                saldo= saldo - 100;
                this.saldo = this.saldo - 100
                billetes100=billetes100+1
            }
            if (billetes100>1){
                console.log("Se extrajo, ",billetes100,"billetes de $100")
            }
            else {
                console.log("Se extrajo, ",billetes100,"billete de $100")
            }
        }
    
        if (saldo > 0 && saldo < 100){
            alert("solo se pueden extraer multiplos de 100, quedan $"+this.saldo+"en la cuenta")
        }
    }

}

var nombre = prompt("Ingrese su nombre")
var edad = prompt("Ingrese su edad")

var persona = new Usuario(nombre,edad,160000)

alert("Hola "+persona.nombre+" usted tiene $"+persona.saldo)

var dinero_extraccion = prompt("Cuanto dinero desea extraer ?")

while (dinero_extraccion>persona.saldo) {
    alert("El monto ingresado, supera el saldo en su cuenta")
    dinero_extraccion = prompt("Por favor, ingrese un monto menor")
}

persona.retirar(dinero_extraccion)

console.log(persona.saldo)