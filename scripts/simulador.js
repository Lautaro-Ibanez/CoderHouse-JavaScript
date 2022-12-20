var billetes = prompt("Ingrese monto a extraer");

function extractorDeBilletes(valor) {

    if (valor >= 1000) {
    var billetes1000=0;
    while (valor >= 1000){
        valor= valor - 1000;
        billetes1000=billetes1000+1
    }
    if (billetes1000>1){
        console.log("Se extrajo, ",billetes1000,"billetes de $1000")
    }
    else {
        console.log("Se extrajo, ",billetes1000,"billete de $1000")
    }
}

    if (valor >= 500) {
        var billetes500=0;
        while (valor >= 500){
            valor= valor - 500;
            billetes500=billetes500+1
        }
        if (billetes500>1){
            console.log("Se extrajo, ",billetes500,"billetes de $500")
        }
        else {
            console.log("Se extrajo, ",billetes500,"billete de $500")
        }
    }

    if (valor >= 200) {
        var billetes200=0;
        while (valor >= 200){
            valor= valor - 200;
            billetes200=billetes200+1
        }
        if (billetes200>1){
            console.log("Se extrajo, ",billetes200,"billetes de $200")
        }
        else {
            console.log("Se extrajo, ",billetes200,"billete de $200")
        }
    }

    if (valor >= 100) {
        var billetes100=0;
        while (valor >= 100){
            valor= valor - 100;
            billetes100=billetes100+1
        }
        if (billetes100>1){
            console.log("Se extrajo, ",billetes100,"billetes de $100")
        }
        else {
            console.log("Se extrajo, ",billetes100,"billete de $100")
        }
    }

    if (valor > 0 && valor < 100){
        alert("solo se pueden extraer multiplos de 100, quedan $",valor,"en la cuenta")
    }
}


extractorDeBilletes(billetes)